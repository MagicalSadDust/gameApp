import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import Title from '../../shared/ui/title';
import WordsComponent from '../words';
import InputMenager from '../inputMenager';
import { Container } from './styled';
import { steps } from '../../shared/config/data';
import NextLevel from '../nextLevel';

const Panel = () => {
  const [isNextLevel, setIsNextLevel] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(() => {
    return Number(localStorage.getItem('currentLevel')) || 1;
  });

  useEffect(() => {
    const storedLevel = Number(localStorage.getItem('currentLevel')) || 1;
    if (currentLevel !== storedLevel) {
      setCurrentLevel(storedLevel);
    }
  }, [currentLevel]);

  const level = useSelector((state) => state.level.jsonFiles[steps[currentLevel]]) || [];
  const solvedWords = useSelector((state) => state.solved.solvedWords) || [];

  useEffect(() => {
    if ((level.length === solvedWords.length && solvedWords.length > 0) || currentLevel > 7) {
      setIsNextLevel(true);
    } 
  }, [level.length, solvedWords.length, currentLevel]);

  const handleButtonClick = useCallback(() => {
    console.log('handleButtonClick');
    
    setIsNextLevel(false);
  }, [])

  if (isNextLevel) return (
    <Container>
      <NextLevel
        level={level}
        solvedWords={solvedWords}
        currentLevel={currentLevel}
        onSetCurrentLevel={setCurrentLevel}
        onButtonClick={handleButtonClick}
      />
    </Container>
  )
  
  return (
    <Container>
      <Title />
      <WordsComponent currentLevel={currentLevel} level={level} solvedWords={solvedWords}/>
      <InputMenager currentLevel={currentLevel} level={level}/>
    </Container>
  );
};

export default Panel;