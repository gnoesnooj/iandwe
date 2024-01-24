import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {ChangeChart, WeeklyWeightChart} from './MomWeightChart';

// 주차별 몸무게
const weightWeekly = [];
// 평균 몸무게
const weightAvg = null;
// 임신 주차
const pregWeek = null;
// status 구하는 함수 필요
const status = 'avg';
// 입력받을 오늘 몸무게
const weightToday = null;

// 띄워줄 메세지
const infoMessage = [
	{stat : 'low', msg: '평균보다 낮습니다'},
	{stat : 'avg', msg: '평균치입니다'},
	{stat : 'high', msg: '평균보다 높습니다'},
]

// 가운데 정렬 css
const setCenter = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

// 박스 기본 css
const commonStyles = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 1,
  border: 1,
  width: "66vw",
};

// low, avg, high에 맞춰서 메세지 출력
function Info() {
	const text = infoMessage.find((element) => {
		if(element.stat === status) return true;
	});
	return (
		<>
		{text.msg}
		</>
	);
}

function RecordMom() {
  return (
    <>
      <Container maxWidth="lg" sx={{ ...setCenter, background: "pink" }}>
        <Box maxWidth="md" sx={{ ...commonStyles, ...setCenter, borderRadius: 3 }}>{<Info />}</Box>
        <Box maxWidth="md" sx={{ ...commonStyles, ...setCenter, borderRadius: 3 }}><WeeklyWeightChart/></Box>
        <Box maxWidth="md" sx={{ ...commonStyles, ...setCenter, borderRadius: 3 }}><ChangeChart /></Box>
        <Box maxWidth="md" sx={{ ...commonStyles, ...setCenter, borderRadius: 3 }}>123</Box>
      </Container>
    </>
  );
}

export default RecordMom;
