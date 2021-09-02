import React from 'react'
import styled from 'styled-components'

export default function Grid({ style, children }) {
  return (
    <S_Grid style={style}>
      {children}
    </S_Grid>
  )
}

const S_Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, minmax(100px, auto));
`;