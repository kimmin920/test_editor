import React from "react";
import styled, { css } from "styled-components";
import Block from "./Block";
import sections from "./sections";

export default function Section({ section, childrenStyle, style }) {
  const {
    sectionName,
    flexDirection,
    blocks,
    styles,
    hasInnerSection,
    layout,
    childrenLayout,
  } = section;

  const NamedSection = sections.get(sectionName);

  const childrenLayoutStyle = getChildrenLayoutStyle(childrenLayout, flexDirection);

  const hasChildrenLayout = childrenLayoutStyle.length > 0;

  if (hasInnerSection) {
    const { innerSections } = section;
    return (
      <NamedSection style={{ ...styles, ...getLayoutStyles(layout), ...style }}>
          {innerSections.map((section, index) => (
            <Section
              section={section}
              style={childrenLayoutStyle[index]}
            />
          ))}
      </NamedSection>
    );
  }

  return (
      <NamedSection
        style={{ ...styles, ...getLayoutStyles(layout), ...style }}
      >
        {blocks.map((block, index) => (
          <Block
            block={block}
            childrenStyle={childrenLayoutStyle[index] || {}}
          />
        ))}
      </NamedSection>
  );
}

function getChildrenLayoutStyle(data, flexType) {
  if (!data) {
    return [];
  }

  const key = flexType === "FLEX_COLUMN" ? "height" : "width";

  const { ratios } = data;

  return ratios.map((each) => {
    return {
      [key]: each.value + each.unit,
    };
  });
}

function getLayoutStyles(data) {
  if (!data) {
    return {};
  }

  return {
    width: data.width.value + data.width.unit || "auto",
    height: data.height.value + data.height.unit || "auto",
  };
}

function getWidthHeight(value, unit, isColumn) {
  if (!value) {
    return {
      width: "auto",
      height: "auto",
    };
  }
  if (isColumn) {
    return {
      height: value + unit,
      width: "auto",
    };
  } else {
    return {
      width: value + unit,
      height: "auto",
    };
  }
}

const S_Section = styled.div`
  ${({ isGrid, isColumn }) =>
    isGrid
      ? css`
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(3, minmax(100px, auto));
        `
      : css`
          display: flex;
          flex-direction: ${isColumn ? "column" : "row"};
        `};
`;
