import React from 'react';
import './Accident.scss';

const categories = [
  { name: '무단횡단사고다발지' },
  { name: '보행노인사고다발지' },
  { name: '보행어린이사고다발지' },
  { name: '스쿨존내어린이사고다발지' },
  { name: '자전거사고다발지' },
];

const Categories = ({ onSelect, category }) => {
  return (
    <>
      <div className="categoryBox">
        <ul>
          {categories.map((c) => (
            <li
              className="category"
              tabindex="0"
              active={category === c.name}
              onClick={() => onSelect(c.name)}
            >
              {c.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Categories;
