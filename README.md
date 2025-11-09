# 🚦 경기도 교통사고 다발지역 조회 시스템

> React 기반 실시간 교통안전 정보 제공 플랫폼

[![Demo](https://img.shields.io/badge/Demo-Live-success)](https://backendvirtuoso.github.io/gsitm-react-traffic-safety/)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)](https://reactjs.org/)
[![License](https://img.shields.io/badge/License-Private-red)](LICENSE)

<br>

## 📋 프로젝트 개요

경기도 지역의 **교통사고 다발지역 정보를 시각화**하여 제공하는 웹 애플리케이션입니다.  
공공 데이터 API와 카카오맵을 연동하여 사고 유형별, 지역별, 연도별 교통사고 정보를 조회하고,  
실제 지도에서 사고 위치를 확인할 수 있습니다.

### 🎯 핵심 가치

- **사고 예방**: 교통사고 다발지역 정보 제공으로 운전자의 경각심 고취
- **데이터 시각화**: 1,000건 이상의 사고 데이터를 지도와 리스트로 직관적 표현
- **성능 최적화**: 대용량 데이터를 가상화 렌더링으로 효율적 처리

<br>

## ✨ 주요 기능

### 1️⃣ 교통사고 조회 시스템
- **3가지 사고 유형별 조회**: 무단횡단, 보행어린이, 자전거 사고
- **다중 필터링**: 29개 시군구 × 11개 연도 조합 검색
- **실시간 연동**: 경기도 공공 데이터 포털 Open API 활용

### 2️⃣ 지도 시각화
- **카카오맵 API 연동**: 사고 위치 마커 표시
- **인터랙티브 맵**: 리스트 클릭 시 해당 위치로 자동 이동
- **위치 정보**: 위도/경도 기반 정확한 좌표 표현

### 3️⃣ 성능 최적화
- **가상 스크롤링**: `react-virtualized` 라이브러리 적용
- **지연 렌더링**: 화면에 보이는 항목만 DOM 생성 (1000+ 데이터 처리)
- **메모리 효율**: 불필요한 리렌더링 방지

### 4️⃣ 관리자 기능
- **경찰서 정보 관리**: 시군별 교통안전기관 CRUD
- **페이지네이션**: 9개 항목 단위 데이터 표시
- **반응형 폼**: 입력 유효성 검사 및 실시간 피드백

<br>

## 🛠 기술 스택

### Frontend
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript)
![SASS](https://img.shields.io/badge/SASS-1.77.2-CC6699?style=flat-square&logo=sass)
![Styled Components](https://img.shields.io/badge/Styled_Components-6.1.11-DB7093?style=flat-square&logo=styled-components)

### Libraries
- **React Router Dom** `v6.23.1` - SPA 라우팅
- **Axios** `v1.7.2` - HTTP 통신
- **React Virtualized** `v9.22.5` - 가상 스크롤링
- **React Icons** `v5.2.1` - 아이콘 컴포넌트
- **classnames** `v2.5.1` - 동적 클래스 관리

### External APIs
- 경기도 교통사고 다발지역 API (OpenAPI)
- Kakao Maps JavaScript API

### DevOps
- **gh-pages** - GitHub Pages 배포
- **npm/yarn** - 패키지 관리

<br>

## 🏗 프로젝트 구조

```
src/
├── App.js                    # 메인 애플리케이션 (라우팅, 상태 관리)
├── components/
│   ├── AccidentsList.js     # 사고 목록 (가상화 리스트)
│   ├── AccidentItem.js      # 사고 항목 (개별 카드)
│   ├── Categories.js        # 사고 유형 선택 탭
│   ├── Search.js            # 지역/연도 필터링
│   ├── Map.js               # 카카오맵 연동 컴포넌트
│   ├── Board.js             # 경찰서 정보 관리 (CRUD)
│   └── Accident.scss        # 공통 스타일
├── App.css                  # 레이아웃 스타일
└── index.js                 # 애플리케이션 진입점
```

<br>

## 💡 주요 구현 사항

### 1. 상태 관리 패턴
```javascript
// App.js - 중앙 집중식 상태 관리
const [category, setCategory] = useState('all');
const [year, setYear] = useState('');
const [city, setCity] = useState('');
const [location, setLocation] = useState({ LAT: '37.2893525', LOGT: '127.0535312' });
```

### 2. 가상화 리스트 구현
```javascript
// AccidentsList.js
<AutoSizer>
  {({ height, width }) => (
    <List
      width={width}
      height={height}
      rowCount={filteredAccidents.length}
      rowHeight={117}
      rowRenderer={rowRenderer}
    />
  )}
</AutoSizer>
```

### 3. 다중 필터링 로직
```javascript
// 카테고리 + 지역 + 연도 조합 필터링
const filteredAccidents = category === 'all'
  ? !city && !year ? allAccidents : accidentSearchSelectedFilter
  : city && year ? accidentAllSelectedFilter : accidentCategoryFilter;
```

### 4. 카카오맵 동적 로딩
```javascript
// Map.js - 스크립트 동적 삽입 및 좌표 업데이트
const newScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.addEventListener('load', () => resolve());
    document.head.appendChild(script);
  });
};
```

<br>

## 🚀 설치 및 실행

### 환경 변수 설정
```bash
# .env 파일 생성
REACT_APP_API_KEY=your_gyeonggi_api_key
REACT_APP_KAKAO_API_KEY=your_kakao_api_key
```

### 설치
```bash
# 의존성 설치
npm install
# 또는
yarn install
```

### 실행
```bash
# 개발 서버 시작 (http://localhost:3000)
npm start

# 프로덕션 빌드
npm run build

# GitHub Pages 배포
npm run deploy
```

<br>

## 📊 데이터 흐름도

```
경기도 Open API
      ↓
  AccidentsList (필터링)
      ↓
  ┌───────────┬───────────┐
  ↓           ↓           ↓
List View   Map View   Search Filter
```

<br>

## 📱 주요 화면

### 메인 화면 (사고 목록 + 지도)
- 좌측: 가상화된 사고 목록 (스크롤 최적화)
- 우측: 카카오맵 (마커 표시)
- 상단: 카테고리 탭 네비게이션

### 검색 필터
- 시군 선택 (29개 지역)
- 사고 연도 선택 (2012-2022)
- 검색 / 초기화 버튼

### 교통안전기관 연락망
- 경찰서 정보 테이블 (시군명, 링크, 전화번호)
- CRUD 기능 (추가, 수정, 삭제)
- 페이지네이션 (9개/페이지)

<br>

## 🎥 시연 영상

[![Video Label](http://img.youtube.com/vi/LJhPGPtheq4/0.jpg)](http://youtu.be/LJhPGPtheq4)  
*이미지를 클릭하면 YouTube 시연 영상으로 이동합니다.*

<br>

## 👥 팀 구성

| 역할 | 이름 | 담당 |
|------|------|------|
| 팀장 | 허창범 | 프로젝트 총괄 |
| 부팀장 | 황준하 | 기술 리드 |
| 팀원 | 손수영 | 프론트엔드 개발 |
| 팀원 | 임다영 | 프론트엔드 개발 |
| 팀원 | 박시은 | 프론트엔드 개발 |
| 팀원 | 김지은 | 프론트엔드 개발 |

<br>

## 📌 개발 기간

**2024.05.28 - 2024.06.04** (8일)

<br>

## 🔍 기술적 의사결정

### React Virtualized 도입
- **문제**: 1,000건+ 데이터 렌더링 시 성능 저하
- **해결**: 가상 스크롤링으로 화면 내 요소만 렌더링 (약 90% 성능 개선)

### 상태 끌어올리기 (Lifting State Up)
- **이유**: Map과 List 컴포넌트 간 실시간 동기화 필요
- **구현**: App.js에서 location 상태를 중앙 관리

### SASS/Styled Components 병행
- **SASS**: 공통 컴포넌트 스타일 (Accident.scss)
- **Styled Components**: 동적 스타일링 필요 시

<br>

## 📝 참고사항

1. **순수 React 프로젝트**: 백엔드 없이 React + 공공 API로 구현
2. **클라이언트 상태 관리**: useState/useCallback 활용 (Redux 미사용)
3. **관리자 기능**: 인증 없이 프론트엔드에서 구현 (실무에서는 백엔드 인증 필요)
4. **데이터 제한**: API 호출 시 최대 1,000건 제한 (pSize=1000)

<br>

## 📄 라이선스

이 프로젝트는 팀 프로젝트로 제작되었으며, 교육 목적으로 사용됩니다.

<br>

## 📞 문의

프로젝트 관련 문의사항은 GitHub Issues를 이용해 주세요.

---

**⭐ 이 프로젝트가 도움이 되셨다면 Star를 눌러주세요!**
