import React from 'react'
import styled from 'styled-components'

export default function Title({ contents, styles }) {
  return (
    // NOTE: style object 가 overwrite
    <S_Title style={styles}>
      {contents.value}
    </S_Title>
  )
}

const S_Title = styled.div`
`;
