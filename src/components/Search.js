import React, { useState } from 'react';
import './Accident.scss';
import { useNavigate } from 'react-router-dom';

// 1. 연도 목록을 정의하는 배열 정의
const selectYears = [
  { year: '2012' },
  { year: '2013' },
  { year: '2014' },
  { year: '2015' },
  { year: '2016' },
  { year: '2017' },
  { year: '2018' },
  { year: '2019' },
  { year: '2020' },
  { year: '2021' },
  { year: '2022' },
];
// 2. 도시 목록을 정의하는 배열 정의
const selectCitys = [
  { city: '가평군' },
  { city: '고양시' },
  { city: '과천시' },
  { city: '광명시' },
  { city: '광주시' },
  { city: '구리시' },
  { city: '군포시' },
  { city: '김포시' },
  { city: '남양주시' },
  { city: '동두천시' },
  { city: '부천시' },
  { city: '성남시' },
  { city: '수원시' },
  { city: '시흥시' },
  { city: '안산시' },
  { city: '양주시' },
  { city: '양평군' },
  { city: '여주시' },
  { city: '연천군' },
  { city: '오산시' },
  { city: '용인시' },
  { city: '의왕시' },
  { city: '의정부시' },
  { city: '이천시' },
  { city: '파주시' },
  { city: '평택시' },
  { city: '포천시' },
  { city: '하남시' },
  { city: '화성시' },
];

//3. Search 컴포넌트의 정의(App으로부터 onYearData, onCityData 함수를 props로 받아옴)
const Search = ({ onYearData, onCityData, onResetCategory, onPoint }) => {
  // 4. 선택할 도시와 연도의 상태값 useState로 초기화
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const navigate = useNavigate();

  // 5. 버튼을 클릭 시 선택된 도시와 연도 정보를 부모 컴포넌트인 App으로 전달
  const handleSearch = () => {
    if (selectedCity === '' || selectedYear === '') {
      alert('시도와 사고연도 모두 선택해주세요.');
      return;
    }
    onCityData(selectedCity);
    onYearData(selectedYear);
  };

  const handleReset = () => {
    setSelectedCity('');
    setSelectedYear('');
    // 기본값으로 설정한 빈 문자열("")을 상위 컴포넌트로 전달하여 초기화합니다.
    onCityData('');
    onYearData('');
    onResetCategory(); // **********카테고리 초기화**********
    onPoint({
      LAT: '37.2893525',
      LOGT: '127.0535312',
    });
    navigate('/'); // URL 초기화
  };

  // 6. 렌더링
  return (
    <div className="searchBox">
      <div>
        {/*selectCitys와 selectYears 배열에서 가져옴*/}
        <div className="selectBox">
          <p>시도</p>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="">시도군</option>
            {selectCitys.map((cityOption) => (
              <option key={cityOption.city} value={cityOption.city}>
                {cityOption.city}
              </option>
            ))}
          </select>
        </div>
        <div className="selectBox">
          <p>사고연도</p>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="">사고년도</option>
            {selectYears.map((yearOption) => (
              <option key={yearOption.year} value={yearOption.year}>
                {yearOption.year}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* 검색버튼을 클릭 시 handleSearch함수가 호출되면서 선택된 value가 App으로 전달 */}
      <button onClick={handleSearch}>검색</button>
      <button onClick={handleReset}>초기화</button>
    </div>
  );
};

export default Search;
