import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import fakeGet from '../APIs/API';

export default function APIEpisodes({ contents, styles }) {
  const {
    endpoint,
    title,
  } = contents;

  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    async function fetch() {
      const { data } = await fakeGet(endpoint);
      setEpisodes(data.episodes);
    }

    fetch();
  }, [endpoint]);

  return (
    <S_Episodes style={styles}>
      <p>{title}</p>
      {episodes.map(({post}) => (
        <S_Episode>
          {post.title}
          <video controls>
            <source src={post.vodResource.playlistSrc} />
          </video>
          <S_Thumnail src={post.vodResource.thumbnailSrc} />
        </S_Episode>
      ))}
    </S_Episodes>
  )
}

const S_Episodes = styled.div`
  display: flex;
  overflow: scroll;
  background-color: blue;

  & > video {
    width: 300px;
  }
`;

const S_Thumnail = styled.img`
  position: absolute;
  width: 70%;
  left: 0;
`;

const S_Episode = styled.div`
  position: relative;
  margin-right: 1rem;
`;