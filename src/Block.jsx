import React from 'react'
import blocks from './blocks';

export default function Block({ block, layout }) {
  const {
    blockName,
    contents,
    styles,
  } = block;

  const MappedBlock = blocks.get(blockName);

  console.log(layout);
  return (
    <MappedBlock 
      contents={contents}
      styles={{
        ...styles,
        ...layout,
      }}
    />
  )
}
