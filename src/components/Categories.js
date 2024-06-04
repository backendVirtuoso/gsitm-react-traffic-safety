import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Accident.scss';

const categories = [
  { name: '무단횡단사고다발지' },
  { name: '보행어린이사고다발지' },
  { name: '자전거사고다발지' },
];

// ********** reset 추가 **********
const Categories = ({ onSelect, reset }) => {
  //**********변경부분**********
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    if (reset) {
      setSelectedCategory(null);
    }
  }, [reset]);

  return (
    <>
      <div className="categoryBox">
        <ul>
          {categories.map((c) => (
            <NavLink to={`/${c.name}`} key={c.name}>
              <li
                className={`category ${
                  selectedCategory === c.name ? 'active' : ''
                }`}
                key={c.name}
                onClick={() => {
                  setSelectedCategory(c.name);
                  onSelect(c.name);
                }}
              >
                {c.name}
              </li>
            </NavLink>
          ))}
          <NavLink to="board">
            <li
              className={`category ${
                selectedCategory === '교통안전기관연락망' ? 'active' : ''
              }`}
              onClick={() => {
                setSelectedCategory('교통안전기관연락망');
                onSelect('교통안전기관연락망');
              }}
            >
              교통안전기관연락망
            </li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Categories;
