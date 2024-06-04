import React, { useCallback, useEffect, useState } from 'react';
import AccidentsList from './components/AccidentsList';
import Categories from './components/Categories';
import Search from './components/Search';
import Map from './components/Map';
import './App.css';
import Board from './components/Board';
import { NavLink, Route, Routes, useLocation } from 'react-router-dom';

const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);
  const [year, setYear] = useState('');
  const [city, setCity] = useState('');
  const onYearData = useCallback((year) => setYear(year), []);
  const onCityData = useCallback((city) => setCity(city), []);

  const categoryAll = useLocation();

  useEffect(() => {
    // 사용자가 루트 경로('/')로 돌아갈 때 category 상태를 'all'로 변경합니다.
    if (categoryAll.pathname === '/') {
      setCategory('all');
    }
  }, [categoryAll]); // location이 변경될 때마다 이 useEffect가 실행됩니다.

  // ********** 추가: 카테고리 초기화 상태 관리 **********
  const [resetCategory, setResetCategory] = useState(false);
  const onResetCategory = useCallback(() => {
    setCategory('all');
    setResetCategory(true);
    setTimeout(() => setResetCategory(false), 0); // 상태를 잠시 true로 만들고 다시 false로 변경
  }, []);

  const [location, setLocation] = useState({
    LAT: '37.2893525',
    LOGT: '127.0535312',
  });
  const onPoint = useCallback((location) => setLocation(location), []);

  return (
    <div className="myApp">
      <div className="accident-menu">
        <NavLink to="/" className="NavLink">
          <header onClick={onResetCategory}>
            경기도 사고 유형별 위치 조회
          </header>
        </NavLink>
        <Categories
          category={category}
          onSelect={onSelect}
          reset={resetCategory}
        />
      </div>
      <div className="content">
        <Routes>
          <Route
            // path={['/:category', '/']}
            path="/:category?"
            element={
              <>
                <div className="search-list-box">
                  <Search
                    category={category}
                    year={year}
                    city={city}
                    onYearData={onYearData}
                    onCityData={onCityData}
                    onPoint={onPoint}
                    onResetCategory={onResetCategory}
                  />

                  <AccidentsList
                    category={category}
                    year={year}
                    city={city}
                    onPoint={onPoint}
                  />
                </div>
                <Map location={location} />
              </>
            }
          />
          <Route
            path="/board"
            element={
              <>
                <div>
                  <Board />
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
