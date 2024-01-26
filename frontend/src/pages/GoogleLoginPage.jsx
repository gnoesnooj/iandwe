import axios from "axios";
import googlelogin from "../images/googlelogin.png";

function GoogleLogin() {
  const clientId = "705885514408-e3nf4pp0ctb7cm4etp5jvirl63jf5t83.apps.googleusercontent.com";
  const redirect_uri = "http://localhost:8080/oauth2/authorization/google";
  const GoogleURL = `https://accounts.google.com/o/oauth2/v2/auth?scope=email%20openid&response_type=code&redirect_uri=${redirect_uri}&client_id=${clientId}`;

  const handleLogin = () => {
    window.location.href = GoogleURL;
  };

  const handleAccessToken = (code) => {
    axios.post("https://api.example.com/token", { code })
      .then((response) => {
        const accessToken = response.data.access_token;
        // Access Token을 사용하여 추가적인 작업 수행
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
    <button onClick={handleLogin} style={{ width: '100%', border: 'none', background: 'none' }}>
      <img src={googlelogin} alt="googlelogin" style={{ width: '80px', height: '80px' }} />
    </button>
  </div>
  );
}

export default GoogleLogin;