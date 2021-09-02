import React from 'react'
import styled from 'styled-components';

export default function Description({ contents, styles }) {
  const { type, value } = contents;

  return (
    // TODO: type으로 text 와 html을 나눌지, 모두 html로 할지..
    type === 'text' ?
      (<S_Description style={styles}>
        {value}
      </S_Description>)
      // NOTE: use domPurify to keep safe
      : <div style={styles} dangerouslySetInnerHTML={{ __html: value }}></div>
  )
}

const S_Description = styled.div`
  
`;