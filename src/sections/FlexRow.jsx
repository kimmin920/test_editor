import React from 'react'
import styled from 'styled-components';

export default function FlexRow({ style, children }) {
  return (
    <S_FlexRow style={style}>
      {children}
    </S_FlexRow>
  )
}

const S_FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;