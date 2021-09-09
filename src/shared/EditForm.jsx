import React from "react";
import styled from "styled-components";
import useEditForm from "../hooks/useEditForm";

export default function EditForm({
  title,
  inputs,
  handleSubmitForm,
  isNestedInput = false,
}) {
  const { data, handleSubmit, handleChange } = useEditForm(
    inputs,
    handleSubmitForm
  );

  function onChangeNestedValue(e, name, unit) {
    handleChange({
      target: {
        name: name,
        value: { value: e.target.value, unit },
      },
    });
  }

  function onChangeNestedUnit(e, name, value) {
    handleChange({
      target: {
        name: name,
        value: { value: value, unit: e.target.value },
      },
    });
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Name>{title}</Name>
      {isNestedInput &&
        Object.entries(data).map(([name, value]) => (
          <S_Row>
            <Label key={name + "value"}>
              <Name>{name} value</Name>
              <TextInput
                type="text"
                name={name + "value"}
                placeholder={name}
                value={value.value}
                onChange={(e) => onChangeNestedValue(e, name, value.unit)}
              />
            </Label>
            <Label key={name + "unit"}>
              <Name>{name} unit</Name>
              <TextInput
                type="text"
                name={name + "unit"}
                placeholder={name}
                value={value.unit}
                onChange={(e) => onChangeNestedUnit(e, name, value.value)}
              />
            </Label>
          </S_Row>
        ))}
      {!isNestedInput &&
        Object.entries(data).map(([name, value]) => (
          <Label key={name}>
            <Name>{name}</Name>
            <TextInput
              type="text"
              name={name}
              placeholder={name}
              value={value}
              onChange={handleChange}
            />
          </Label>
        ))}
      <ButtonContainerAlignRight>
        <GreyButton type="submit">Ok</GreyButton>
      </ButtonContainerAlignRight>
    </FormContainer>
  );
}

const S_Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Name = styled.div`
  padding-left: 0.3rem;
  padding-top: 0.5rem;
  font-weight: 500;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  & input {
    width: 100%;
  }
`;

const FormContainer = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgb(243, 243, 243);
  box-shadow: 4px 17px 20px 0px rgb(0 0 0 / 8%);
  padding: 12px 12px;
  box-sizing: border-box;
`;

const TextInput = styled.input`
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  margin: 0;
  font-family: sans-serif;
  font-size: 15px;
  letter-spacing: 1px;
  padding: 0;
  padding-left: 8px;
  color: #111111;
  display: inline-block;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 0;
  background-color: #fbfbfb;
  &:focus {
    outline: none;
  }
`;

const ButtonContainerAlignRight = styled.div`
  text-align: right;
`;

const GreyButton = styled.button`
  width: 51px;
  height: 45px;
  background-color: rgba(255, 255, 255, 0.95);
  color: #111111;
  font-family: sans-serif;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: 300;
  border: transparent 1px solid;
  box-shadow: 0px 3px 6px -6px rgb(0 0 0 / 32%);
  opacity: 1;
  line-height: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  cursor: pointer;
  text-transform: none;
  position: relative;
  border-radius: 0;
  display: inline-block;
  width: auto;
  height: 50px;
  padding-left: 30px;
  padding-right: 30px;
  min-width: 135px;
  background: #f7f7f7;
  &:hover {
    background: #e0dfdf;
  }
`;
