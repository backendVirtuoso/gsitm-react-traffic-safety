import React, { useState } from 'react';
import './Accident.scss';

const selectYears = [
  { year: "2012" },
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

const Search = ({ onData, category, datas }) => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  // const handleSearch = () => {
  //   if (!datas) return;
  //   const result = datas.filter(
  //     (item) =>
  //       (selectedCity ? item.sigunNm === selectedCity : true) &&
  //       (selectedYear ? item.acdntYy === selectedYear : true) &&
  //       (category ? item.acdntDivNm === category : true)
  //   );
  //   onData(result);
  //   console.log('Filtered Data:', result);
  // };
  const handleSearch = () => {
    if (!datas || datas.length === 0) return;
    const result = datas.filter(
      (item) =>
        (selectedCity ? item.sigunNm === selectedCity : true) &&
        (selectedYear ? item.acdntYy === selectedYear : true) &&
        (category && category !== 'all' ? item.acdntDivNm === category : true)
    );
    onData(result);
    console.log('Filtered Data:', result);
  };


  // const handleSearch = () => {
  //   // datas가 유효한 배열인지 확인합니다.
  //   if (!Array.isArray(datas) || datas.length === 0) return;

  //   const result = datas.filter((item) => {
  //     // 각 조건별로 변수가 설정되어 있고, 해당 조건과 데이터 항목이 일치하는지 확인합니다.
  //     const cityMatch = selectedCity ? item.sigunNm === selectedCity : true;
  //     const yearMatch = selectedYear ? item.acdntYy === selectedYear : true;
  //     const categoryMatch = category ? item.acdntDivNm === category : true;

  //     // 모든 조건이 참이면 현재 항목을 결과에 포함시킵니다.
  //     return cityMatch && yearMatch && categoryMatch;
  //   });

  //   onData(result); // 필터링된 결과를 onData 함수에 전달합니다.
  //   console.log('Filtered Data:', result); // 필터링된 결과를 콘솔에 출력합니다.
  // };

  return (
    <div className="searchBox">
      <div>
        <div className="selectBox">
          <p>시도</p>
          <select onChange={(e) => setSelectedCity(e.target.value)}>
            <option>시도군</option>
            {selectCitys.map((cityOption) => (
              <option key={cityOption.city} value={cityOption.city}>
                {cityOption.city}
              </option>
            ))}
          </select>
        </div>
        <div className="selectBox">
          <p>사고연도</p>
          <select onChange={(e) => setSelectedYear(e.target.value)}>
            <option>사고년도</option>
            {selectYears.map((yearOption) => (
              <option key={yearOption.year} value={yearOption.year}>
                {yearOption.year}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button onClick={handleSearch}>검색</button>
    </div>
  );
};

export default Search;
