import { Error, FlexColumn, Label, StyledTextarea } from './styled';

const Textarea = ({ label, value, name, register, rules = {}, error = {}, handleInputChange, ...props }) => (
  <FlexColumn>
    {label && <Label>{label}</Label>}
    <StyledTextarea
      component="textarea"
      {...props}
      {...register(name, rules)}
      name={name}
      value={value}
      onChange={handleInputChange}
    />
    {Boolean(error?.type) && <Error>{error.message || 'Invalid field'}</Error>}
  </FlexColumn>
);

export default Textarea;
