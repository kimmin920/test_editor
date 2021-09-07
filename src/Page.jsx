import React, { useContext } from "react";
import styled from "styled-components";
import { PageContext } from "./context/PageContext";
import useModal from "./hooks/useModal";
import Section from "./Section";
import { EditButton } from "./shared/EditButton";
import EditForm from "./shared/EditForm";
import Modal from "./shared/Modal";

export default function Page({ pageData }) {
  const { sections, childrenLayout, styles, background } = pageData;
  const { isModalOpen, toggleModal, setModalOpen } = useModal();
  const { updateBackground, updateStyle } = useContext(PageContext);

  const childrenLayoutStyle = getChildrenLayoutStyle(
    childrenLayout,
    "FLEX_COLUMN"
  );

  function updateLayout(data) {
    console.log(data);
  }

  return (
    <>
      <S_Page
        style={{
          ...styles,
          ...getBackgroundStyle(background),
        }}
      >
        <EditButton type="button" onClick={() => toggleModal()}>
          EDIT
        </EditButton>
        {sections.map((section, index) => (
          <Section section={section} style={childrenLayoutStyle[index]} />
        ))}
      </S_Page>
      {isModalOpen && (
        <Modal title="EDIT" handleClose={() => setModalOpen(false)}>
          <EditForm
            title="Edit styles"
            inputs={{ ...styles }}
            handleSubmitForm={updateStyle}
          />
          <EditForm 
            title="Edit Layout"
            inputs={{...childrenLayout.ratios}}
            handleSubmitForm={updateLayout}
          />
          <EditForm
            title="Edit background"
            inputs={{ ...background }}
            handleSubmitForm={updateBackground}
          />
        </Modal>
      )}
    </>
  );
}

const S_Page = styled.div`
  width: 100%;
  height: 100%;
`;

function getBackgroundStyle(data) {
  const styles = { ...data };

  if (styles.imgSrc) {
    const temp = styles.imgSrc;
    styles.backgroundImage = `url(${temp})`;

    delete styles.imgSrc;
  }
  return styles;
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
