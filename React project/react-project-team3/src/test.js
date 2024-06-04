import React from 'react';

const test = () => {
    return (
        <Routes>
   <Route path="/" element={Categories /> 
      <Route path="/accidentsList" element={accidentsList />} >
         <Route path=":id" element={accidentItem />} />
      </Route>
      <Route path="/" element={map />} />
      <Route path="/board" element={Board} />} />
   </Route>
</Routes>
    );
};

export default test;