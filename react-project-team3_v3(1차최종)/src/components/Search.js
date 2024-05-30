import React, { useState } from 'react';
import './Accident.scss';

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

const Search = ({ onYearData, onCityData }) => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const handleSearch = () => {
    onCityData(selectedCity);
    onYearData(selectedYear);
  };

  return (
    <div className="searchBox">
      <div>
        <div className="selectBox">
          <p>시도</p>
          <select onChange={(e) => setSelectedCity(e.target.value)}>
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
          <select onChange={(e) => setSelectedYear(e.target.value)}>
            <option value="">사고년도</option>
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
