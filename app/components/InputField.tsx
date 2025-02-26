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

const InputField = ({ label, name, register, error }: any) => {
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
