import React from 'react';
import APIEpisodes from './APIEpisodes';
import ApiImg from './ApiImg';
import Description from './Description';
import Gallery from './Gallery';
import Header from './Header';
import Spacer from './Spacer';
import Title from './Title';

const blocks = new Map();

blocks
  .set('DESCRIPTION', Description)
  .set('TITLE', Title)
  .set('API_IMAGE', ApiImg)
  .set('GALLERY', Gallery)
  .set('API_EPISODE_LIST', APIEpisodes)
  .set('HEADER', Header)
  .set('SPACER', Spacer);

// TODO: class화 한 후, render method 를 통해 렌더해도 될 듯

export default blocks;
