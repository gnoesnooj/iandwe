import React, { useEffect } from "react";
import axios from "axios";
import naverlogin from "../images/naverlogin.png";
import { useNavigate } from "react-router-dom";

function NaverLogin({ setIsLoggedIn }) {
  const BackURL = `http://localhost:8080/oauth2/authorization/naver`;
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("로그인눌림");
    window.location.href = BackURL;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get("accessToken");

        if (code) {
          console.log("토큰:", code);
          document.cookie = `token=${code}`;
          setIsLoggedIn(true); // 로그인 성공 시 isLoggedIn 상태를 true로 설정

          navigate("/"); // 로그인이 완료되면 '/'로 이동
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [setIsLoggedIn, navigate]);

  axios.interceptors.request.use(
    (config) => {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return (
    <div>
      <button onClick={handleLogin} style={{ width: "100%", border: "none", background: "none" }}>
        <img src={naverlogin} alt="naverLogin" style={{ width: '80px', height: '80px' }} />
      </button>
    </div>
  );
}

export default NaverLogin;