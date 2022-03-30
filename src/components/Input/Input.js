import { CloseButton, Error, FlexColumn, InputRow, Label, StyledInput } from './styled';

const Input = ({ name, register, rules, error, inputConfig = {}, reset, wrapperStyle, placeholder, label, value, onChange, ...otherProps }) => {

  return (
    <FlexColumn>
      {label && <Label>{label}</Label>}
      <InputRow closeButton={Boolean(reset)} style={wrapperStyle}>
        <StyledInput
          name={name}
          value={value}
          onChange={onChange}
          {...otherProps}
          {...inputConfig}
          bigRightPadding={Boolean(reset)}
          placeholder={placeholder}
        />
        {Boolean(reset) && <CloseButton onClick={reset}/>}
      </InputRow>
      {Boolean(error?.type) && <Error>{error.message || 'Invalid field'}</Error>}
    </FlexColumn>
  );
};

export default Input;
