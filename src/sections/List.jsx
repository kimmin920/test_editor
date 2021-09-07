import React from "react";
import styled from "styled-components";

export default function List({ children, style }) {
  return (
    <S_List style={style}>
      {React.Children.map(children, (child) => (
        <S_Item>
          {child}
        </S_Item>
      ))}
    </S_List>
  );
}

const S_List = styled.ul``;
const S_Item = styled.li``;