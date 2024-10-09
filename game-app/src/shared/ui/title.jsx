import { TitleComponent } from './styled';

const Title = () => {
  return (
    <TitleComponent>
        Уровень {localStorage.getItem('currentLevel')}  
    </TitleComponent>
  );
};

export default Title;