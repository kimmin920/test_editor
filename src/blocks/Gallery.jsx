import React from 'react'
import styled from 'styled-components'

export default function Gallery({ contents, styles }) {
  const { value } = contents;

  return (
    <S_Gallery>
      {value.map(each => <Cell />)}
    </S_Gallery>
  )
}

const S_Gallery = styled.div`

`;

const Cell = styled.div`
  width: 66%;
  height: 200px;
  margin-right: 10px;
  background: #8C8;
  counter-increment: gallery-cell;

  ::before {
    display: block;
    text-align: center;
    content: counter(gallery-cell);
    line-height: 200px;
    font-size: 80px;
    color: white;
  }
`;