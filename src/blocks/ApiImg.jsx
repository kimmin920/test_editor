import React, { useEffect, useState } from "react";
import styled from "styled-components";

const loadingGIF = "https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif";

export default function ApiImg({ contents, styles }) {
  const [src, setSrc] = useState("");

  useEffect(() => {
    async function fetchAPI() {
      const res = await fetch(contents.value);
      const url = (await res.json())[0].url;

      setSrc(url);
    }

    fetchAPI();
  }, []);

  return src ? (
    <img style={styles} src={src} alt="hello" />
  ) : (
    <img style={styles} src={loadingGIF} alt="no-img" />
  );
}
