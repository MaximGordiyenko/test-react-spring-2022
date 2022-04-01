import { Fragment, useEffect, useState } from "react";
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
import { Input } from "../../components";

export const List = ({ category, description, date_created, status, user_name }) => {
  const [state, setState] = useState({
    editing: false,
    changedUserName: '',
  });

  useEffect(() => {
    setState({
      ...state,
      changedUserName: user_name
    });
  }, []);

  const handleEditing = () => {
    setState({
      editing: true,
      changedUserName: user_name
    });
  };

  const handleEditingDone = ({ keyCode }) => {
    if (keyCode === 13) {
      setState({
        ...state,
        editing: false,
      });
    }
  };

  const handleEditingChange = ({ target: { value } }) => {
    setState({
      ...state,
      changedUserName: value
    });
  };

  const viewStyle = {};
  const editStyle = {};

  if (state.editing) {
    viewStyle.display = 'none';
  } else {
    editStyle.display = 'none';
  }

  return (
    <>
      <Fragment>
        <ServiceWrapper onClick={() => {
        }}>
          <ServiceInfoRow>
            <ServiceLeftBlock>
              <MainColumn>
                <Row>
                <GrayTitle>
                  <NameSpan style={viewStyle} onDoubleClick={handleEditing}>
                    {state.changedUserName}
                  </NameSpan>
                  <Input type="text"
                         style={editStyle}
                         value={state.changedUserName}
                         onKeyDown={e => handleEditingDone(e)}
                         onChange={e => handleEditingChange(e)}
                  />
                </GrayTitle>
                <GrayTitle>
                    {category ? `${user_name ? ' - ' : ''}${category}` : ''}
                </GrayTitle>
                </Row>
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
    </>
  );
};
