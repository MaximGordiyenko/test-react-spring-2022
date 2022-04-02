import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createJob, getAllJobsFetch, getInputValue } from '../../store/actions';
import { CreateJobModal, Input } from '../../components';
import { Button, FlexOneContainer, SearchWrapper, Title, Wrapper } from './styled';
import { List } from "./List";
import { formatDate } from "../../utils/formatDataTime";
import { v4 as uuidv4 } from 'uuid';

const JobList = () => {
    const [isCreateFormVisible, setIsCreateFormVisible] = useState(false);
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState({
      search: "",
      user_name: "",
      category: "",
      description: "",
    });

    const resetInputValue = () => {
      setInputValue({
        search: "",
        user_name: "",
        category: "",
        description: ""
      })
    };

    const today = new Date();
    const arrayOfStatuses = ['Reviewing', 'Paid', 'Payment', 'Ongoing', 'Scheduled'];
    const random = Math.floor(Math.random() * arrayOfStatuses.length);

    const createJobObject = {
      id: uuidv4(),
      user_name: inputValue.user_name,
      category: inputValue.category,
      description: inputValue.description,
      status: arrayOfStatuses[random],
      date_created: formatDate(today),
    };

    const { list } = useSelector((state) => state?.job);
    const { result } = useSelector(state => state?.job);

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

    const job = list && result && result.length === 0 ? list : result;

    return (
      <FlexOneContainer>
        <Wrapper>
          <Title>Job List</Title>
          <SearchWrapper>
            <Input placeholder="Search" name="search" value={inputValue.search} onChange={handleInputChange}/>
          </SearchWrapper>
          {
            job?.map(({
                        id,
                        category,
                        description,
                        date_created,
                        status,
                        user_name
                      }) => <List
                key={id}
                category={category}
                description={description}
                date_created={date_created}
                status={status}
                user_name={user_name}
                inputValue={inputValue}
              />
            )
          }
          <Button onClick={handleToggleCreateJobModal}>
            Add a job
          </Button>
        </Wrapper>
        <CreateJobModal
          isVisible={isCreateFormVisible}
          onToggleModal={handleToggleCreateJobModal}
          value={inputValue}
          handleInputChange={handleInputChange}
          createJobObject={createJobObject}
          dispatch={dispatch}
          resetInputValue={resetInputValue}
        />
      </FlexOneContainer>
    );
  }
;

export default JobList;
