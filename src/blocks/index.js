import React from 'react'
import Description from './Description';
import Spacer from './Spacer';
import Title from './Title';

const blocks = new Map();

blocks
  .set('DESCRIPTION', Description)
  .set('TITLE', Title)
  .set('SPACER', Spacer);

// TODO: class화 한 후, render method 를 통해 렌더해도 될 듯

export default blocks;
