import React from 'react'
import styled from 'styled-components';
import Section from './Section';

export default function Page({ pageData }) {
  const {
    layout,
    sections,
    styles,
    background
  } = pageData;

  return (
    <S_Page style={{
      ...styles,
      ...getBackgroundStyle(background)
    }}>
      {sections.map((section) => <Section section={section} />)}
    </S_Page>
  )
}

const S_Page = styled.div`
  width: 100%;
  height: 100%;
`;

function getBackgroundStyle(data) {
  const styles = { ...data };

  if (styles.imgSrc) {
    const temp = styles.imgSrc;
    styles.backgroundImage = `url(${temp})`;
  
    delete styles.imgSrc;
  }
  return styles;
}