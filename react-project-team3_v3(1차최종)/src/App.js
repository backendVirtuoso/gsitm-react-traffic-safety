import React, { useCallback, useState } from 'react';
import AccidentsList from './components/AccidentsList';
import Categories from './components/Categories';
import Search from './components/Search';
import Map from './components/Map';
import './App.css';

const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);
  const [year, setYear] = useState('');
  const [city, setCity] = useState('');
  const onYearData = useCallback((year) => setYear(year), []);
  const onCityData = useCallback((city) => setCity(city), []);

  console.log(year);
  console.log(city);

  const [location, setLocation] = useState({
    LAT: '37.2893525',
    LOGT: '127.0535312',
  });
  const onPoint = useCallback((location) => setLocation(location), []);

  return (
    <div className="myApp">
      <div className="accident-menu">
        <header>경기도 사고 유형별 위치 통계</header>
        <Categories category={category} onSelect={onSelect} />
      </div>
      <div>
        <Search
          category={category}
          year={year}
          city={city}
          onYearData={onYearData}
          onCityData={onCityData}
        />
        <AccidentsList
          category={category}
          onPoint={onPoint}
          year={year}
          city={city}
        />
        <Map location={location} />
      </div>
    </div>
  );
};

export default App;
