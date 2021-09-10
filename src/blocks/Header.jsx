import React from 'react'

export default function Header({ contents, styles }) {
  return (
    <div style={styles}>
      <h1>{contents.value}</h1>
    </div>
  );
}
