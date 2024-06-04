import React from 'react';

const AccidentItem = ({ accident, onClick }) => {
  const { SIGUN_NM, ACDNT_DIV_NM, ACDNT_YY, LAT, LOGT } = accident;
  const location = { LAT, LOGT };

  const handleItemClick = () => {
    onClick(location);
  };

  return (
    <div className="item" onClick={handleItemClick}>
      <p>사고유형 : {ACDNT_DIV_NM}</p>
      <p>행정자치별 : {SIGUN_NM}</p>
      <p>년도 : {ACDNT_YY}</p>
    </div>
  );
};

export default AccidentItem;
