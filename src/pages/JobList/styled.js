import styled from 'styled-components';
import styles from '../../constants/styles';

export const FlexOneContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
`;


export const Wrapper = styled.div`
  padding: 25px 0 0;
  display: flex;
  flex-direction: column;
  max-width: 450px;
  align-self: center;
`;

export const SearchWrapper = styled.div` 
  margin-bottom: 15px;
  padding: 0 20px;
`
export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const NameSpan = styled.span`
  text-transform: capitalize;
`;

export const CapitalizedBoldText = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-transform: capitalize;
  padding-right: 9px;
  margin: auto 0;
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  padding: 0 20px;
  color: ${styles.colors.GRAY};
`;

export const ServiceWrapper = styled.div`
  border-bottom: 1px solid ${styles.colors.LIGHT_GRAY};
  padding: 15px 20px 12px;
  &:hover {
    cursor: pointer;
    background-color: ${styles.colors.LIGHT_GRAY_2};
  }
`;

export const ServiceInfoRow = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

export const ServiceLeftBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const GrayTitle = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  color: ${styles.colors.GRAY};
  margin: 0 0 4px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ColumnAlignRight = styled(Column)`
  align-items: flex-end;
  & div,
  & p {
    text-align: right;
  }
`;

export const MainColumn = styled(Column)`
  padding-right: 25px;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.5;
  color: ${styles.colors.GRAY};
  padding: 15px 20px 20px;

  &:hover:not([disabled]) {
    cursor: pointer;
    color: ${styles.colors.DARK_BLUE};
  }
`;
