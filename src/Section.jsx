import React from 'react';
import styled, { css } from 'styled-components';
import Block from './Block';

export default function Section({ section }) {
  const { 
    blocks,
    styles,
    layout: {
      isGrid,
      columns,
      rows,
      unit,
      self: { width, height },
    },
  } = section;

  const isColumns = columns.length > 0;

  function getLayout(index) {
    const temp = {};

    if (isColumns) {
      temp['height'] = columns[index] + unit;
    } else {
      temp['width'] = rows[index] + unit;
    }
  
    return temp;
  }

  return (
    <S_Section
      style={{ ...styles, width, height }}
      isGrid={isGrid}
      unit={unit}
      columns={columns}
      rows={rows}
    >
      {blocks.map((block, index) => <Block block={block} layout={getLayout(index)} />)}
    </S_Section>
  )
}

const S_Section = styled.div`
  ${({ isGrid }) => isGrid ? 
    css `
      display: grid;
      grid-template-columns: repeat(3, 1fr);
	    grid-template-rows: repeat(3, minmax(100px, auto));
    `
    : css `
      display: flex;
    `
  };
  
  ${({ columns, unit }) => { 
    if (columns.length < 0) {
      return;
    }

    return css`
      flex-direction: column;
  `}};

  ${({ rows }) => rows.length > 0 &&
    css`
      flex-direction: row;  
  `};
`;