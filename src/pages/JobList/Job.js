import { Fragment } from "react";
import {
  CapitalizedBoldText,
  ColumnAlignRight,
  GrayTitle,
  MainColumn,
  NameSpan,
  Row,
  ServiceInfoRow,
  ServiceLeftBlock,
  ServiceWrapper
} from "./styled";

export const Job = ({ result }) => {
  return (
    <div>
      {result?.map(({
                      id,
                      category,
                      description,
                      date_created,
                      status,
                      user_name
                    }) => {
        return (
          <Fragment key={id}>
            <ServiceWrapper onClick={() => {
            }}>
              <ServiceInfoRow>
                <ServiceLeftBlock>
                  <MainColumn>
                    <GrayTitle>
                      <NameSpan>
                        {user_name}
                      </NameSpan>
                      {category ? `${user_name ? ' - ' : ''}${category}` : ''}
                    </GrayTitle>
                    <Row>
                      <CapitalizedBoldText>{status}</CapitalizedBoldText>
                    </Row>
                  </MainColumn>
                </ServiceLeftBlock>

                <ColumnAlignRight>
                  <GrayTitle marginBottom={4}>
                    Requested date:
                  </GrayTitle>
                  <GrayTitle>
                    {(new Date(date_created)).toDateString() || '-'}
                  </GrayTitle>
                </ColumnAlignRight>
              </ServiceInfoRow>

              <ServiceInfoRow>
                <GrayTitle>
                  {description}
                </GrayTitle>
              </ServiceInfoRow>
            </ServiceWrapper>
          </Fragment>
        );
      })}
    </div>
  );
};
