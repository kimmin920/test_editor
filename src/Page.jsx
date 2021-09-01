import React from 'react'
import styled from 'styled-components';
import Section from './Section';

export default function Page({ pageData }) {
  const {
    layout,
    sections
  } = pageData;

  return (
    <S_Page>
      {sections.map((section) => <Section section={section} />)}
    </S_Page>
  )
}

const S_Page = styled.div`
  width: 100%;
  height: 100%;
`;