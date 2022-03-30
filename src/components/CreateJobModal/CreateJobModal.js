import { useForm } from 'react-hook-form';

import { colors } from '../../common/enums';
import { Button, Input, Modal, Textarea } from '../../components';

import { ContentWrapper, FlexRow } from './styled';

const CreateJobModal = ({ isLoading, isVisible, onToggleModal, value, handleInputChange }) => {
  const { register } = useForm();

  const handleSubmitForm = () => {
    // TODO: add logic here
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
        <FlexRow>
          <Input register={register} name="user_name" label="Customer Name" value={value.user_name}
                 onChange={handleInputChange}/>
        </FlexRow>
        <FlexRow>
          <Input register={register} name="category" label="Category" value={value.category}
                 onChange={handleInputChange}/>
        </FlexRow>
        <FlexRow>
          <Textarea register={register} name="description" label="Add Description" value={value.description}
                    onChange={handleInputChange}/>
        </FlexRow>
        <FlexRow>
          <Button title="Cancel" type="secondary" margin="0 20px 0 0" onClick={onToggleModal}/>
          <Button
            title="Create"
            onClick={handleSubmitForm}
            disabled={isLoading}
          />
        </FlexRow>
      </ContentWrapper>
    </Modal>
  );
};

export default CreateJobModal;
