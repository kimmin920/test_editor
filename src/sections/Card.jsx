import React from 'react'
import styled from 'styled-components'

export default function Card({ children }) {
  return (
    <S_Card>
      {children}
    </S_Card>
  )
}

const S_Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0.3rem;
  border: .5rem dashed gold;
  height: 300px;
  width: 300px;
  margin: auto;
`;