import styled from "styled-components";

const Button = styled.button`
  font-size: 1rem;
  background: blue;
  color: white;
  margin: 1rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: darkblue;
  }
`;

const SubmitButton = ({ text }: { text: string }) => {
  return <Button type="submit">{text}</Button>;
};

export default SubmitButton;
