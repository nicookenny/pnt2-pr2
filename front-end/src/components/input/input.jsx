import { InputContainer, StyledInput } from './styled-components';

export const Input = ({ label, ...props }) => {
  return (
    <InputContainer>
      {' '}
      {label}
      <StyledInput {...props} />
    </InputContainer>
  );
};
