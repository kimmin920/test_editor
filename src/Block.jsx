import React from 'react'
import blocks from './blocks';

export default function Block({ block, layout, childrenStyle }) {
  const {
    blockName,
    contents,
    styles,
  } = block;

  const MappedBlock = blocks.get(blockName);

  return (
    <MappedBlock 
      contents={contents}
      styles={{
        ...styles,
        ...layout,
        ...childrenStyle
      }}
    />
  )
}
