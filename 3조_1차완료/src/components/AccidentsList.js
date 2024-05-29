import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AccidentItem from './AccidentItem';
import './Accident.scss';

const AccidentsList = ({ category, datas, onPoint, setDatas }) => {
  const [accidents, setAccidents] = useState(null);
  const [loading, setLoading] = useState(false);

  const accidentCategoryFilter =
    accidents &&
    accidents.filter((accident) => accident.ACDNT_DIV_NM === category);

  const accidentCategorySearchFilter =
    datas &&
    datas.filter((accident) => accident.ACDNT_DIV_NM === category);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response1 = await axios.get(
          `https://openapi.gg.go.kr/TfcacdarM?KEY=fc76fc7bb9be43b4b5a9bdfd41f63e39&TYPE=json&pIndex=1&pSize=1000`
        );
        const response2 = await axios.get(
          `https://openapi.gg.go.kr/TfcacdarM?KEY=94668116cfae4dde96ff030db11a8a63&TYPE=json&pIndex=2&pSize=1000`
        );
        const response3 = await axios.get(
          `https://openapi.gg.go.kr/TfcacdarM?KEY=e682e21122bc4c089da7c4d23ebd312f&TYPE=json&pIndex=3&pSize=500`
        );

        const mergedData = [
          ...response1.data.TfcacdarM[1].row,
          ...response2.data.TfcacdarM[1].row,
          ...response3.data.TfcacdarM[1].row,
        ];

        setAccidents(mergedData);
        setDatas(mergedData);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [setDatas]);

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

  return (
    // <div className="list">
    //   {accidents.map((accident) => (
    //     <AccidentItem
    //       className="item"
    //       width={898}
    //       height={117}
    //       key={accident.id}
    //       accident={accident}
    //       onPoint={onPoint}
    //       onClick={() => handleItemClick(accident.location)}
    //     />
    //   ))} 
    // </div>

        <div className="list">
       {/* {accidents.map((accident) => (
        <AccidentItem
          className="item"
          width={898}
          height={117}
          accident={accident}
        />
      ))}
       {accidentCategoryFilter.map((accident, index) => (
        <AccidentItem
          className="item"
          width={898}
          height={117}
          accident={accident}
          key={index}
          onClick={handleItemClick}
        />
      ))} */}
      {accidentCategorySearchFilter.map((accident, index) => (
        <AccidentItem
          className="item"
          width={898}
          height={117}
          accident={accident}
          key={index}
          onClick={handleItemClick}
        />
      ))}
      
    </div>
  );
};

export default AccidentsList;
