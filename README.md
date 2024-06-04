# 경기도 사고 유형별 위치 조회 프로젝트
## React SPA를 활용한 교통안전 프로젝트

## 🚥 소개
**배경** : 현재 대한민국은 자동차 보유가 보편화되어 현대 사회에서 편리한 교통 수단으로 자리 잡고 있습니다.  
자동차의 증가와 함께 교통 사고 역시 발생 빈도가 높아지고 있습니다.  
특히 특정 지역에서는 반복적으로 교통사고가 발생하는 사고 다발지역이 존재합니다.  

<br>

**목표** : 이 프로젝트는 사고 다발지역의 정보를 제공함으로써 국민들이 사고 다발지역에 대한 경각심을 갖고,  
사고 예방과 안전 운전에 대한 의식을 높이는데 중점을 두어 안전한 도로 환경을 구축하는데 기여하고자 합니다.  

<br>

## 💻 개발환경
개발 도구 <img src="https://img.shields.io/badge/JavaScript-FFFF00"> <img src="https://img.shields.io/badge/HTML-FF0000"> <img src="https://img.shields.io/badge/CSS-013ADF"> <img src="https://img.shields.io/badge/React-81BEF7">

라이브러리 <img src="https://img.shields.io/badge/axios-AC58FA"> <img src="https://img.shields.io/badge/react-58D3F7"> <img src="https://img.shields.io/badge/react dom-FA5858"> <img src="https://img.shields.io/badge/react icon-FA8258"> <img src="https://img.shields.io/badge/react router dom-F4FA58"> <img src="https://img.shields.io/badge/react virtualized-58FA58">

<br>

## 🙋‍♂️🙋‍♀️ 참고사항
1. 이 프로젝트는 오로지 리액트를 사용하여 구성되었습니다.
2. 실제 데이터베이스 연동없이 구현되어 있습니다.
3. 게시판은 관리자만 사용할 수 있도록 설계되었습니다.
4. node_modules가 없는 파일이므로 실행 전 yarn install을 먼저 진행해 주세요.
   
<br>

## 🛠 기능 요약
### 1. 사고유형 / 지역 / 사고연도에 따른 사고다발지 조회
- 사고 데이터 검색 및 조회기능
- 사고 유형에 따른 지역 / 사고연도를 조회할 수 있는 목록 제공
### 2. 카카오맵 연동
- 카카오 맵 API를 사용하여 지도 제공
- 원하는 조건에 해당하는 사고 데이터 클릭 시, 해당 위치에 대한 마커가 표시됨
### 3. 렌더링 최적화
- react-virtualized 라이브러리의 List 컴포넌트 사용
- 스크롤 시에 필요한 항목만 동적으로 렌더링
- API로 받은 대량의 데이터를 효율적으로 처리함
### 4. 교통안전기관연락망
- 경기도 시/군별 교통안전기관 연락처 및 웹사이트주소 제공
- 웹 관리자가 CRUD할 수 있으며, 이용자는 Read Only


<br>


## ⏰ 개발 기간
2024/05/28 ~ 2024/06/04

<br>

## 👩‍💻 멤버 구성
- 허창범(팀장)
- 황준하(부팀장)
- 손수영
- 임다영  
- 박시은
- 김지은

<br>


## 📹 시연 영상
[![Video Lable](http://img.youtube.com/vi/LJhPGPtheq4/0.jpg)](http://youtu.be/LJhPGPtheq4)  
이미지를 클릭하면 영상을 시청할 수 있는 링크로 이동됩니다.

<br>

## 🖥 화면별 기능
![image](https://github.com/GSITM-Team3/react-traffic-safety/assets/144106932/d1570657-af01-4d3f-a4f5-161d63ba7d4e)
![image](https://github.com/GSITM-Team3/react-traffic-safety/assets/144106932/881ad2cb-29c4-4e31-83f9-2c8c6a3fbc72)
![image](https://github.com/GSITM-Team3/react-traffic-safety/assets/144106932/3c416d74-4e29-4b77-a1e1-acfb1f4c77b6)
![image](https://github.com/GSITM-Team3/react-traffic-safety/assets/144106932/b27133f9-9344-4a1b-beca-f4355515a1bb)
