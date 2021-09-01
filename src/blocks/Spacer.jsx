import React from 'react'
import styled from 'styled-components'

export default function Spacer({ contents, styles }) {
  return (
    <S_Spacer style={styles}>

    </S_Spacer>
  )
}

const S_Spacer = styled.div`
  min-height: 100px;
  min-width: 100px;
`;