import React, { useContext, useState } from 'react'
import Page from './Page';
import styled from 'styled-components';
import { PageContext } from './context/PageContext';

function App() {
  const { page } = useContext(PageContext);

  return (
    <S_App>
      <Page pageData={page} />
    </S_App>
  );
}

export default App;

const S_App = styled.div``;