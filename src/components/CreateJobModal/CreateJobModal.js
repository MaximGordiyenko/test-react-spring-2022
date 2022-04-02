import { Button, Input, Modal, Textarea } from '../../components';
import { colors } from '../../common/enums';
import { ContentWrapper, FlexRow } from './styled';
import { createJob } from "../../store/actions";

const CreateJobModal = ({
                          isLoading = true,
                          isVisible,
                          onToggleModal,
                          value,
                          handleInputChange,
                          createJobObject,
                          dispatch,
                          resetInputValue
                        }) => {

    if (value.category.length >= 4 && value.description.length >= 10 && value.user_name.length >= 2) {
      console.log(value.category.length >= 4 && value.description.length >= 10 && value.user_name.length >= 2);
      isLoading = false;
    }

    const handleSubmitForm = (e) => {
      e.preventDefault();
      dispatch(createJob(createJobObject));
      resetInputValue();
    };

    return (
      <Modal
        isModalVisible={isVisible}
        onModalClose={onToggleModal}
        heading="Create New Job"
        backgroundColor={colors.WHITE}
        middlePaddings
        maxWidth={0}
        maxHeight={0}>
        <ContentWrapper>
          <form>
            <FlexRow>
              <Input name="user_name" label="Customer Name" value={value.user_name} onChange={handleInputChange}
                     requere/>
            </FlexRow>
            <FlexRow>
              <Input name="category" label="Category" value={value.category} onChange={handleInputChange}/>
            </FlexRow>
            <FlexRow>
              <Textarea name="description" label="Add Description" value={value.description}
                        onChange={handleInputChange}/>
            </FlexRow>
            <FlexRow>
              <Button title="Cancel" type="secondary" margin="0 20px 0 0" onClick={onToggleModal}/>
              <Button
                inputType="submit"
                title="Create"
                onClick={handleSubmitForm}
                disabled={isLoading}
              />
            </FlexRow>
          </form>
        </ContentWrapper>
      </Modal>
    );
  }
;

export default CreateJobModal;
