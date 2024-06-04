import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AccidentItem from './AccidentItem';
import './Accident.scss';
import { List, AutoSizer } from 'react-virtualized';

const API_KEY = process.env.REACT_APP_API_KEY;

const AccidentsList = ({ category, year, city, onPoint }) => {
  const [accidents, setAccidents] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('API Key:', API_KEY);
    const fetchData = async () => {
      setLoading(true);
      try {
        const response1 = await axios.get(
          `https://openapi.gg.go.kr/TfcacdarM?KEY=${API_KEY}&TYPE=json&pIndex=1&pSize=1000`
        );
        console.log('API Key:', process.env.REACT_APP_API_KEY);
        const response = response1.data.TfcacdarM[1].row;

        console.log(response);
        setAccidents(response);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // 로딩 중일 때
  if (loading) {
    return <div>대기 중...</div>;
  }

  // accidents 값이 설정되기 전일 때
  if (!accidents) {
    return null;
  }

  // 모든 사고 목록을 출력
  const allAccidents = accidents;

  // 카테고리만 선택했을 때의 필터링
  const accidentCategoryFilter =
    accidents &&
    accidents.filter((accident) => accident.ACDNT_DIV_NM === category);

  // city와 year만 선택했을 때의 필터링
  const accidentSearchSelectedFilter =
    accidents &&
    accidents.filter(
      (accident) => accident.SIGUN_NM === city && accident.ACDNT_YY === year
      // &&
      // category === 'all'
    );

  // 세 개의 조건에 대한 필터링
  const accidentAllSelectedFilter =
    accidents &&
    accidents.filter(
      (accident) =>
        accident.SIGUN_NM === city &&
        accident.ACDNT_YY === year &&
        accident.ACDNT_DIV_NM === category
    );

  // 필터링된 사고 목록
  const filteredAccidents =
    category === 'all'
      ? !city && !year
        ? allAccidents
        : accidentSearchSelectedFilter
      : city && year
      ? accidentAllSelectedFilter
      : accidentCategoryFilter;

  const handleItemClick = (location) => {
    onPoint(location);
  };

  const rowRenderer = ({ index, key, style }) => (
    <div key={key} style={style}>
      <AccidentItem
        className="item"
        width={300}
        height={117}
        accident={filteredAccidents[index]}
        onClick={handleItemClick}
      />
    </div>
  );

  return (
    <div className="list">
      <AutoSizer>
        {({ height, width }) =>
          // 조건부 렌더링
          filteredAccidents.length === 0 ? (
            <div
              style={{
                height,
                width,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              데이터가 없습니다
            </div>
          ) : (
            <List
              width={width}
              height={height}
              rowCount={filteredAccidents.length}
              rowHeight={117}
              rowRenderer={rowRenderer}
            />
          )
        }
      </AutoSizer>
    </div>
  );
};

export default AccidentsList;
