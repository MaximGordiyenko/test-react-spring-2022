import styled from 'styled-components';

export const CloseButton = styled.div`
  position: absolute;
  display: block;
  cursor: pointer;
  top: 11px;
  right: 11px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: none;
  transition: background 0.3s;
  background: ${({ theme }) => theme.colors.LIGHT_GRAY};
  &:after,
  &:before {
    display: block;
    content: '';
    width: 10px;
    border-radius: 15%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.BLACK};
    position: absolute;
    margin: 9px auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  &:hover {
    &:after,
    &:before {
      border-bottom: 1px solid ${({ theme }) => theme.colors.RED};
    }
  }
  &:after {
    transform: rotate(45deg);
  }
  &:before {
    transform: rotate(-45deg);
  }
`;

export const InputRow = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const StyledInput = styled.input.attrs({
  className: 'input'
})`
  background-color: ${({ theme }) => theme.colors.LIGHT_GRAY_2};
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.BLACK};
  font-weight: 700;
  font-size: 15px;
  line-height: 1.33;
  display: inline-block;
  outline: 0 none;
  width: 100%;
  ${({ bigRightPadding }) => (bigRightPadding ? 'padding: 11px 40px 9px 12px;' : 'padding: 11px 12px 9px;')}
  &::placeholder {
    color: ${({ theme }) => theme.colors.LIGHT_GRAY};
  }

  ${({ invalid }) =>
    invalid &&
    `
    border: 1px solid ${({ theme }) => theme.colors.RED};
    box-shadow: none;
  `}

  &:active,
  &:focus {
    outline: 0 none;
    box-shadow: 0 0 0 0.1em ${({ invalid, theme }) => (invalid ? `${theme.colors.RED}` : `${theme.colors.GRAY}`)};
    background: ${({ theme }) => theme.colors.WHITE};
    border: none;
  }

  &[disabled],
  &[readOnly] {
    color: ${({ theme }) => theme.colors.GRAY};
    box-shadow: none;
    background: ${({ theme }) => theme.colors.LIGHT_GRAY_2};
  }
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 12px;
  line-height: 1.17;
  color: ${({ theme }) => theme.colors.GRAY};
  margin-bottom: 5px;
`;

export const Error = styled(Label)`
  color: ${({ theme }) => theme.colors.RED};
  margin-top: 5px;
`;
