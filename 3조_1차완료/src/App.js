import React, { useCallback, useEffect, useState } from 'react';
import AccidentsList from './components/AccidentsList';
import Categories from './components/Categories';
import Search from './components/Search';
import Map from './components/Map';
import './App.css';

const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);
  const [datas, setDatas] = useState([]);
  const onData = useCallback((datas) => setDatas(datas), []);

  console.log(datas);

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
        <Search category={category} onData={onData} datas={datas} />
        <AccidentsList category={category} datas={datas} onPoint={onPoint} />
        <Map location={location} />
      </div>
    </div>
  );
};

export default App;
