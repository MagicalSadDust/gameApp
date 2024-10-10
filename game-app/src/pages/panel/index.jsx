import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import useTabManager from 'Model/useTabManager';
import ModalWindow from 'UI/modalWindow';
import Title from 'UI/title';
import { steps } from '../../shared/config/data';
import InputMenager from '../inputManager';
import WordsComponent from '../words';
import NextLevel from '../nextLevel';
import { Container } from './styled';

const Panel = () => {
  const [isNextLevel, setIsNextLevel] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(() => {
    return Number(localStorage.getItem('currentLevel')) || 1;
  });

  const isOutdated = useTabManager();

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
      {isOutdated && <ModalWindow />}
    </Container>
  )
  
  return (
    <Container>
      <Title />
      <WordsComponent currentLevel={currentLevel} level={level} solvedWords={solvedWords}/>
      <InputMenager currentLevel={currentLevel} level={level}/>
      {isOutdated && <ModalWindow />}
    </Container>
  );
};

export default Panel;