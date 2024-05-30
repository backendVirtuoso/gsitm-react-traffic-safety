import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AccidentItem from './AccidentItem';
import './Accident.scss';
import { List, AutoSizer } from 'react-virtualized';

const AccidentsList = ({ category, year, city, onPoint }) => {
  const [accidents, setAccidents] = useState(null);
  const [loading, setLoading] = useState(false);

  // 카테고리만 선택했을 때의 필터링
  const accidentCategoryFilter =
    accidents &&
    accidents.filter((accident) => accident.ACDNT_DIV_NM === category);

  // 검색 버튼 클릭 시의 필터링
  const accidentSearchSelectedFilter =
    accidents &&
    accidents.filter(
      (accident) =>
        accident.SIGUN_NM === city &&
        accident.ACDNT_YY === year &&
        accident.ACDNT_DIV_NM === category
    );

  // 모든 사고 목록을 출력
  const allAccidents = accidents;

  // 필터링된 사고 목록
  const filteredAccidents =
    category === 'all'
      ? allAccidents
      : city && year && category
      ? accidentSearchSelectedFilter
      : accidentCategoryFilter;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response1 = await axios.get(
          `https://openapi.gg.go.kr/TfcacdarM?KEY=fc76fc7bb9be43b4b5a9bdfd41f63e39&TYPE=json&pIndex=1&pSize=1000`
        );

        const response = response1.data.TfcacdarM[1].row;

        console.log(response);
        setAccidents(response);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category, year, city]);

  //로딩시
  if (loading) {
    return <div>대기중...</div>;
  }

  //accidents 값이 설정되기 전
  if (!accidents) {
    return null;
  }

  const handleItemClick = (location) => {
    console.log(typeof location);
    console.log(location);
    onPoint(location);
  };

  const rowRenderer = ({ index, key, style }) => (
    <div key={key} style={style}>
      <AccidentItem
        className="item"
        width={898}
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
          // 조건부 렌더링 적용
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
