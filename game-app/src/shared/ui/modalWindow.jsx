import { ModalComponent, ModalWrapper, Button, Image, Title  } from './styled';

const ModalWindow = () => {

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <ModalComponent>
      <ModalWrapper>
        <Image />
        <Title>Две вкладки <br/> с игрой?</Title>
          Похоже, игра открыта в нескольких вкладках браузера. Чтобы продолжить играть в этой вкладке, обновите страницу.   
        <Button onClick={handleRefresh}>Обновить</Button>        
      </ModalWrapper>
    </ModalComponent>
  );
};

export default ModalWindow;