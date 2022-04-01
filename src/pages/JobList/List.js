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

export const List = ({ id, category, description, date_created, status, user_name }) => {
  const [state, setState] = useState({
    editing: false,
    changedUserName: '',
    changedCategory: '',
    changedDescription: '',
  });

  useEffect(() => {
    setState({
      ...state,
      changedUserName: user_name,
      changedCategory: category,
      changedDescription: description,
    });
  }, []);

  const editUserName = () => {
    setState({
      ...state,
      editing: true,
      changedUserName: user_name,
    });
  };

  const editCategory = () => {
    setState({
      ...state,
      editing: true,
      changedCategory: category,
    });
  };

  const editDescription = () => {
    setState({
      ...state,
      editing: true,
      changedDescription: description,
    });
  };

  const editingChangedUserName = ({ target: { value } }) => {
    setState({
      ...state,
      changedUserName: value,
    });
  };

  const editingChangedCategory = ({ target: { value } }) => {
    setState({
      ...state,
      changedCategory: value,
    });
  };

  const editChangedDescription = ({ target: { value } }) => {
    setState({
      ...state,
      changedDescription: value,
    });
  };

  const handleEditingDone = ({ keyCode }) => {
    console.log(state);
    if (keyCode === 13) {
      setState({
        ...state,
        editing: false,
      });
    }
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
                    <NameSpan style={viewStyle} onDoubleClick={editDescription}>
                      {state.changedUserName}
                    </NameSpan>
                    <Input type="text"
                           style={editStyle}
                           value={state.changedUserName}
                           onKeyDown={e => handleEditingDone(e)}
                           onChange={e => editingChangedUserName(e)}
                    />
                  </GrayTitle>
                  <GrayTitle>
                    <NameSpan style={viewStyle} onDoubleClick={editCategory}>
                      {state.changedCategory ? `${state.changedUserName ? ' - ' : ''}${state.changedCategory}` : ''}
                    </NameSpan>
                    <Input type="text"
                           style={editStyle}
                           value={state.changedCategory}
                           onKeyDown={e => handleEditingDone(e)}
                           onChange={e => editingChangedCategory(e)}
                    />
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
              <NameSpan style={viewStyle} onDoubleClick={editUserName}>
                {state.changedDescription}
              </NameSpan>
              <Input type="text"
                     style={editStyle}
                     value={state.changedDescription}
                     onKeyDown={e => handleEditingDone(e)}
                     onChange={e => editChangedDescription(e)}
              />
            </GrayTitle>
          </ServiceInfoRow>
        </ServiceWrapper>
      </Fragment>
    </>
  );
};
