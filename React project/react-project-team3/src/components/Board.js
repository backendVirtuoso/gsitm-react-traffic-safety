import React, { useState, useRef, useCallback } from 'react';
import './Accident.scss';
import { PiPlusCircleBold } from 'react-icons/pi';
import { BsPencilSquare } from 'react-icons/bs';
import { IoMdCloseCircleOutline } from 'react-icons/io';

const dummyData = [
  {
    id: 1,
    city: '가평군',
    link: 'https://ggbpolice.go.kr/gp/mainPage.do',
    tel: '031-580-1228',
  },
  {
    id: 2,
    city: '고양시',
    link: 'https://ggbpolice.go.kr/gy/mainPage.do',
    tel: '031-830-5868',
  },
  {
    id: 3,
    city: '과천시',
    link: 'https://www.ggpolice.go.kr/gc/',
    tel: '02-2149-4353',
  },
  {
    id: 4,
    city: '광명시',
    link: 'https://www.ggpolice.go.kr/gm/',
    tel: '02-2093-0351',
  },
  {
    id: 5,
    city: '광주시',
    link: 'https://www.ggpolice.go.kr/gj/',
    tel: '031-790-7352',
  },
  {
    id: 6,
    city: '구리시',
    link: 'https://ggbpolice.go.kr/guri/mainPage.do',
    tel: '031-560-9352',
  },
  {
    id: 7,
    city: '군포시',
    link: 'https://www.ggpolice.go.kr/gunpo/',
    tel: '031-390-9352',
  },
  {
    id: 8,
    city: '김포시',
    link: 'https://www.ggpolice.go.kr/gimpo/',
    tel: '031-950-2352',
  },
  {
    id: 9,
    city: '남양주시',
    link: 'https://ggbpolice.go.kr/nyj/mainPage.do',
    tel: '031-579-8871',
  },
  {
    id: 10,
    city: '동두천시',
    link: 'https://ggbpolice.go.kr/ddc/mainPage.do',
    tel: '031-869-0352',
  },
  {
    id: 11,
    city: '부천시',
    link: 'https://www.ggpolice.go.kr/bcss/',
    tel: '032-456-0352',
  },
  {
    id: 12,
    city: '성남시',
    link: 'https://www.ggpolice.go.kr/snsj/',
    tel: '031-751-4153',
  },
  {
    id: 13,
    city: '수원시',
    link: 'https://www.ggpolice.go.kr/swnb/',
    tel: '031-899-0352',
  },
  {
    id: 14,
    city: '시흥시',
    link: 'https://www.ggpolice.go.kr/sh/',
    tel: '031-310-9352, 9153',
  },
  {
    id: 15,
    city: '안산시',
    link: 'https://www.ggpolice.go.kr/ansan/',
    tel: '031-8040-0359',
  },
  {
    id: 16,
    city: '양주시',
    link: 'https://ggbpolice.go.kr/yangju/mainPage.do',
    tel: '031-869-9352',
  },
  {
    id: 17,
    city: '양평군',
    link: 'https://www.ggpolice.go.kr/yp/',
    tel: '031-770-9352',
  },
  {
    id: 18,
    city: '여주시',
    link: 'https://www.ggpolice.go.kr/yj/index.do',
    tel: '031-887-0352',
  },
  {
    id: 19,
    city: '연천군',
    link: 'https://ggbpolice.go.kr/yc/mainPage.do',
    tel: '031-839-5352',
  },
  {
    id: 20,
    city: '오산시',
    link: 'https://www.ggpolice.go.kr/os/',
    tel: '031-371-8127',
  },
  {
    id: 21,
    city: '용인시',
    link: 'https://www.ggpolice.go.kr/yidb/',
    tel: '031-260-0352',
  },
  {
    id: 22,
    city: '의왕시',
    link: 'https://www.ggpolice.go.kr/uw/',
    tel: '031-8086-0352',
  },
  {
    id: 23,
    city: '의정부시',
    link: 'https://ggbpolice.go.kr/ujb/mainPage.do',
    tel: '031-849-3358',
  },
  {
    id: 24,
    city: '이천시',
    link: 'https://www.ggpolice.go.kr/ic/',
    tel: '031-645-0352',
  },
  {
    id: 25,
    city: '파주시',
    link: 'https://ggbpolice.go.kr/pj/mainPage.do',
    tel: '031-956-5591',
  },
  {
    id: 26,
    city: '평택시',
    link: 'https://www.ggpolice.go.kr/pt/',
    tel: '031-8053-0361',
  },
  {
    id: 27,
    city: '포천시',
    link: 'https://ggbpolice.go.kr/pc/mainPage.do',
    tel: '031-539-8352',
  },
  {
    id: 28,
    city: '하남시',
    link: 'https://www.ggpolice.go.kr/hn/',
    tel: '031-790-0352',
  },
  {
    id: 29,
    city: '화성시',
    link: 'https://www.ggpolice.go.kr/hssb/',
    tel: '031-379-9352',
  },
];

const Board = () => {
  // CRUD
  const [data, setData] = useState(dummyData);
  const [editId, setEditId] = useState(null);
  const nextId = useRef(dummyData.length + 1);
  const [form, setForm] = useState({ city: '', link: '', tel: '' });

  //Pagenation
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // 현재 페이지에 보여줄 데이터 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 넘버링 생성
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  // CRUD
  // 상태 및 함수들을 효율적으로 관리하기 위해 useCallback을 사용합니다.
  const onChange = useCallback(
    (e) => {
      // 이벤트 타겟에서 name과 value를 추출합니다.
      const { name, value } = e.target;
      // form 상태를 업데이트합니다. 기존 상태를 복사하고, 변경된 값을 적용합니다.
      setForm({
        ...form,
        [name]: value,
      });
    },
    [form] // form 상태가 변경될 때마다 이 콜백이 업데이트됩니다.
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const { city, link, tel } = form;

      // 입력 필드가 비어 있는지 확인합니다.
      if (!city || !link || !tel) {
        alert('시도와 링크, 전화번호를 모두 입력해주세요.');
        return;
      }

      if (editId) {
        setData(
          data.map((item) => (item.id === editId ? { ...item, ...form } : item))
        );
        setEditId(null);
      } else {
        // 새 데이터를 추가할 때 현재 페이지가 1페이지라면 데이터를 추가하고 첫 페이지로 이동합니다.
        if (currentPage === 1) {
          setData([
            {
              id: nextId.current++,
              ...form,
            },
            ...data, // 기존 데이터를 배열 앞쪽에 추가합니다.
          ]);
        } else {
          // 현재 페이지가 1페이지가 아니라면 첫 페이지로 이동한 후 데이터를 추가합니다.
          setData([
            {
              id: nextId.current++,
              ...form,
            },
            ...data, // 기존 데이터를 배열 앞쪽에 추가합니다.
          ]);
          setCurrentPage(1);
        }
      }
      setForm({ city: '', link: '', tel: '' });
    },
    [data, editId, form, currentPage]
  );
  const onEdit = useCallback(
    (id) => {
      const item = data.find((item) => item.id === id);
      setForm({ city: item.city, link: item.link, tel: item.tel });
      setEditId(id);
    },
    [data]
  );

  const onDelete = useCallback(
    (id) => {
      setData(data.filter((item) => item.id !== id));
    },
    [data]
  );

  return (
    <div className="board">
      <div className="formBox">
        <form onSubmit={onSubmit}>
          <div className="inputBox">
            <div>
              <label>시군명</label>
              <input
                type="text"
                name="city"
                placeholder="시군명을 입력하세요"
                value={form.city}
                onChange={onChange}
              />
            </div>
            <div>
              <label>링크</label>
              <input
                type="text"
                name="link"
                placeholder="링크를 입력하세요"
                value={form.link}
                onChange={onChange}
              />
            </div>
            <div>
              <label>전화번호</label>
              <input
                type="tel"
                name="tel"
                placeholder="전화번호를 입력하세요"
                value={form.tel}
                onChange={onChange}
              />
            </div>
          </div>
          <button type="submit" style={{ background: 'none', border: 'none' }}>
            <PiPlusCircleBold size={40} className="icon" />
          </button>
        </form>
      </div>
      <div className="postBox">
        <table>
          <tr className="table-header">
            <td>시군명</td>
            <td>링크</td>
            <td>전화번호</td>
            <td>수정 / 삭제</td>
          </tr>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td>{item.city}</td>
              <td>
                <a href={item.link}>{item.link}</a>
              </td>
              <td>{item.tel}</td>
              <td>
                <BsPencilSquare
                  size={30}
                  onClick={() => onEdit(item.id)}
                  className="icon"
                />
                <IoMdCloseCircleOutline
                  size={35}
                  onClick={() => onDelete(item.id)}
                  className="icon"
                />
              </td>
            </tr>
          ))}
        </table>
      </div>
      <div className="pageNumber">
        <ul>
          {pageNumbers.map((number) => (
            <li
              key={number}
              id={number}
              onClick={handleClick}
              className={currentPage === number ? 'active' : ''}
            >
              {number}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Board;
