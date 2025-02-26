import { useState } from "react";
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

const StrengthBar = styled.div<{ strength: number }>`
  height: 5px;
  width: ${(props) => props.strength}%;
  background-color: ${(props) =>
    props.strength > 75 ? "green" : props.strength > 50 ? "orange" : "red"};
  transition: width 0.3s ease-in-out;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 0.75rem;
`;

const PasswordField = ({ name, register, error }: any) => {
  const [strength, setStrength] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const score = value.length * 20;
    setStrength(score > 100 ? 100 : score);
  };

  return (
    <Wrapper>
      <Label>Lösenord</Label>
      <Input {...register(name)} type="password" onChange={handleChange} />
      <StrengthBar strength={strength} />
      {error && <ErrorText>{error}</ErrorText>}
    </Wrapper>
  );
};

export default PasswordField;
