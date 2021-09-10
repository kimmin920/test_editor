import React, { useState } from "react";
import styled from "styled-components";

export default function JsonEditor({ json }) {
  return (
    <div>
      <h1>JSON</h1>
      <ul>
        {Object.entries(json).map(([name, value]) => (
          <JsonItem name={name} value={value} />
        ))}
      </ul>
    </div>
  );
}

function JsonItem({ name, value }) {
  const [isValueOpen, setIsValueOpen] = useState(false);

  return (
    <>
      <JsonKey>{name}</JsonKey>
    </>
  );
}

const JsonKey = styled.li``;
