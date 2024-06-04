import React, { useEffect } from 'react';

const Map = ({ location }) => {
  // 스크립트 파일 읽어오기 함수 정의
  const newScript = (src) => {
    // src는 로드할 스크립트 파일의 URL
    return new Promise((resolve, reject) => {
      // newScript 함수는 Promise를 생성해 반환시킨다
      const script = document.createElement('script'); // 새로운 <script>를 생성
      script.src = src; // <script>의 src속성을 상단의 src로 설정
      script.addEventListener('load', () => {
        // 스크립트 로드가 완료 되면 이벤트 리스너를 추가
        resolve(); // 성공 상태로 전환
      });
      script.addEventListener('error', (e) => {
        // 스크립트 로드 중 오류가 발생하면 이벤트리스너를 추가
        reject(e); // 실패 상태로 전환하고 오류 객체를 전달
      });
      document.head.appendChild(script); // <script>의 정보들을 head값에 넣어 로드를 한다.
    });
  }; // 로드 상태를 Promise로 관리

  useEffect(() => {
    const lat = parseFloat(location.LAT);
    const logt = parseFloat(location.LOGT);
    // useEffect로 마운트 될 때 한번만 실행 되도록
    //카카오맵 스크립트 읽어오기
    const myScript = newScript(
      'https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=f9349cf97b6fc59654343a6fef2d3d4c'
    );

    //스크립트 읽기 완료 후 카카오맵 설정
    myScript.then(() => {
      // then 메소드를 이용해 카카오 맵을 설정하는 콜백함수
      const kakao = window['kakao']; // 전역객체 window의 kakao 속성을 통해서 접근
      kakao.maps.load(() => {
        // 카카오맵 라이브러리가 로드될 때 실행될 콜백함수
        const mapContainer = document.getElementById('map');
        const options = {
          center: new kakao.maps.LatLng(lat, logt), //좌표설정
          level: 3,
        };
        const map = new kakao.maps.Map(mapContainer, options); //맵생성

        // 맵이 이미 초기화된 경우 위치만 업데이트
        if (map) {
          const moveLatLogt = new kakao.maps.LatLng(lat, logt);
          map.setCenter(moveLatLogt);
        } else {
          // 맵 초기화
          map = new kakao.maps.Map(mapContainer, options);
        }

        //마커설정
        const markerPosition = new kakao.maps.LatLng(lat, logt);
        const marker = new kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    });
  }, [location]);

  return <div id="map" />;
};

export default Map;
