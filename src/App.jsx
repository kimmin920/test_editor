import React, { useContext, useState } from 'react'
import Page from './Page';
import styled from 'styled-components';
import { PageContext } from './context/PageContext';
import JsonEditor from './JsonEditor';

function App() {
  const { page } = useContext(PageContext);
  console.log(page);
  return (
    <S_App>
      <SideBox>
        <JsonEditor json={page} />
      </SideBox>
      <Box>
        <Page pageData={page} />
      </Box>
    </S_App>
  );
}

export default App;

const S_App = styled.div`
  position: relative;
  display: flex;
`;

const Box = styled.div`
  width: 80%;
`;

const SideBox = styled.div`
  width: 20%;
`;