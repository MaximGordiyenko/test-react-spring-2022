import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobsFetch, getInputValue } from '../../store/actions';
import { CreateJobModal, Input } from '../../components';

import { Button, FlexOneContainer, SearchWrapper, Title, Wrapper } from './styled';
import { Job } from "./Job";
import { List } from "./List";

const JobList = () => {
    const [isCreateFormVisible, setIsCreateFormVisible] = useState(false);
    const [inputValue, setInputValue] = useState({
      search: "",
      user_name: "",
      category: "",
      description: "",
    });

    const dispatch = useDispatch();

    const { list } = useSelector((state) => state.job);
    const { result } = useSelector(state => state.job);

    useEffect(() => {
      dispatch(getAllJobsFetch());
      dispatch(getInputValue(inputValue.search));
    }, [dispatch, inputValue.search]);

    const handleToggleCreateJobModal = () => {
      setIsCreateFormVisible((isCreateFormVisible) => !isCreateFormVisible);
    };

    const handleInputChange = ({ target: { name, value } }) => {
      setInputValue({
          ...inputValue,
          [name]: value
        }
      );
    };

    return (
      <FlexOneContainer>
        <Wrapper>
          <Title>Job List</Title>
          <SearchWrapper>
            <Input placeholder="Search" name="search" value={inputValue.search} onChange={handleInputChange}/>
          </SearchWrapper>
          {
            list && result && result.length === 0 ?
              <List list={list}/>
              : <Job result={result}/>
          }
          <Button onClick={handleToggleCreateJobModal}>
            Add a job
          </Button>
        </Wrapper>
        <CreateJobModal isVisible={isCreateFormVisible} onToggleModal={handleToggleCreateJobModal} value={inputValue}
                        handleInputChange={handleInputChange}/>
      </FlexOneContainer>
    );
  }
;

export default JobList;
