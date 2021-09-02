import React from 'react'
import styled from 'styled-components'

export default function FlexColumn({ style, children }) {
  return (
    <S_FlexColumn style={style}>
      {children}
    </S_FlexColumn>
  )
}

const S_FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;