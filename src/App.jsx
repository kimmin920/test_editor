import React, { useState } from 'react'
import Page from './Page';
import styled from 'styled-components';
import pageData from './samples/default.json';


function App() {
  return (
    <S_App>
      <Page pageData={pageData.page} />
    </S_App>
  );
}

export default App;

const S_App = styled.div``;