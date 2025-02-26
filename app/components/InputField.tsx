import React from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 1rem;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 0.875rem;
`;

interface InputFieldProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  error?: FieldError | string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  register,
  error,
}) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input {...register(name)} />
      {error && (
        <ErrorText>
          {typeof error === "string" ? error : error.message}
        </ErrorText>
      )}
    </Wrapper>
  );
};

export default InputField;
