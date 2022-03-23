import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobsFetch } from 'store/actions';
import { selectJobList, selectJobListLoading } from 'store/reducers/job';

import {
  FlexOneContainer,
  Wrapper,
  Title,
  ServiceWrapper,
  ServiceInfoRow,
  ServiceLeftBlock,
  MainColumn,
  ColumnAlignRight,
  GrayTitle,
  BoldText,
  CapitalizedBoldText,
  Button,
  NameSpan,
  Row
} from './styled';

const JobList = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => ({
    list: selectJobList(state),
    loading: selectJobListLoading(state)
  }));

  useEffect(() => {
    dispatch(getAllJobsFetch());
  }, [dispatch, getAllJobsFetch]);

  const handleAddJob = () => {

  };

  return (
    <FlexOneContainer>
    <Wrapper>
        <Title>Job List</Title>
        {list.map(({
          id,
          service,
          date_created,
          datetime_last_activity,
          status,
          user
        }) => {
        return (
            <Fragment key={id}>
            <ServiceWrapper onClick={() => {}}>
                <ServiceInfoRow>
                <ServiceLeftBlock>
                    <MainColumn>
                    <GrayTitle>
                        {id} -
                        <NameSpan>
                        {' '}
                        {user?.given_name} {user?.family_name}{' '}
                        </NameSpan>
                        {user?.id ? `(${user?.id})` : ''}
                        {service?.name ? `${user?.id ? ' - ' : ''}${service.name}` : ''}
                    </GrayTitle>
                    <Row>
                        <CapitalizedBoldText>{status}</CapitalizedBoldText>
                    </Row>
                    </MainColumn>
                </ServiceLeftBlock>
                <ColumnAlignRight>
                    <GrayTitle marginBottom={4}>
                    Last Active: {datetime_last_activity}
                    </GrayTitle>
                    <BoldText>Req date: {date_created}</BoldText>
                </ColumnAlignRight>
                </ServiceInfoRow>
            </ServiceWrapper>
            </Fragment>
        );
        })}
        <Button onClick={handleAddJob}>
          Add job
        </Button>
    </Wrapper>
    </FlexOneContainer>
  );
};

export default JobList;
