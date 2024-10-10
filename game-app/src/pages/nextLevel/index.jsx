import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { resetSolvedWords } from 'Store/reducers/levelSlice';
import { Container, Button, Title, Subtitle } from './styled'

const NextLevel = (props) => {
  const {
    level = [],
    solvedWords =[],
    currentLevel,
    onSetCurrentLevel,
    onButtonClick,
  } = props;
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    if (level.length === solvedWords.length && solvedWords.length > 0) {
      localStorage.setItem('currentLevel', (currentLevel + 1).toString());
      localStorage.setItem('solvedWords', '[]');
      dispatch(resetSolvedWords())
      onSetCurrentLevel((prevState) => prevState + 1);
      onButtonClick();
    }     
  }

  const handleResetClick = () => {
    localStorage.setItem('currentLevel', '1');
    localStorage.setItem('solvedWords', '[]');
    dispatch(resetSolvedWords())
    onSetCurrentLevel(1);
    onButtonClick();
  }


  if (currentLevel === 7) return (
    <Container>
      <div>
        <Title>Уровень {currentLevel} пройден</Title>
        <Subtitle>Игра окончена!</Subtitle>        
      </div>
      <Button onClick={handleResetClick}>Еще раз</Button>
    </Container>
  )
  
  return (
    <Container>
      <div>
        <Title>Уровень {currentLevel} пройден</Title>
        <Subtitle>Изумительно!</Subtitle>        
      </div>
      <Button onClick={handleButtonClick}>Уровень {currentLevel + 1}</Button>
    </Container>
  )
}

NextLevel.propTypes = {
  level: PropTypes.array,
  solvedWords: PropTypes.array,
  currentLevel: PropTypes.number,
  onSetCurrentLevel: PropTypes.func,
  onButtonClick: PropTypes.func,
};

export default NextLevel;