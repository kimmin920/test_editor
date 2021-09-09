import React from "react";
import styled from "styled-components";
import useGrid from "../hooks/useGrid";
import EditForm from "../shared/EditForm";
import Modal from "../shared/Modal";
import useModal from "../hooks/useModal";
import { EditButton } from "../shared/EditButton";

export default function Grid({ data }) {
  const { isModalOpen, toggleModal, setModalOpen } = useModal();
  const {
    gridStyle,
    areas,
    rows,
    columns,
    onChangeGridAreas,
    addColumn,
    addRow,
    changeColumns,
    changeRows,
  } = useGrid(data);

  function onSubmitArea(result) {
    onChangeGridAreas(Object.values(result));
  }

  return (
    <S_Box>
      <EditButton onClick={() => setModalOpen(true)}>EDIT GRID</EditButton>
      {isModalOpen && (
        <Modal title="Edit Grid" handleClose={() => setModalOpen(false)}>
          <button onClick={addColumn}>Add column</button>
          <button onClick={addRow}>Add row</button>
          <S_Box>
            <EditForm
              title="edit areas"
              inputs={areas}
              handleSubmitForm={onSubmitArea}
            />
            <EditForm
              title="edit columns"
              inputs={columns}
              handleSubmitForm={(result) => changeColumns(Object.values(result))}
              isNestedInput
            />
            <EditForm
              title="edit rows"
              inputs={rows}
              handleSubmitForm={(result) => changeRows(Object.values(result))}
              isNestedInput
            />
          </S_Box>
        </Modal>
      )}
      <S_Grid style={gridStyle}>
        <div
          style={{
            gridArea: "header",
            background: "red",
          }}
        >
          this is header!
        </div>
        <div
          style={{
            gridArea: "main",
            background: "green",
          }}
        >
          this is main!
        </div>
        <div
          style={{
            gridArea: "sidebar",
            background: "yellow",
          }}
        >
          this is sidebar
        </div>
        <div
          style={{
            gridArea: "footer",
            background: "orange",
          }}
        >
          this is footer!
        </div>
        <div
          style={{
            gridArea: "button",
            background: "grey",
          }}
        >
          this is button!
        </div>
      </S_Grid>
    </S_Box>
  );
}

const S_Grid = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
`;

const S_Box = styled.div`
  position: relative;
  display: flex;
`;
