import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Component, Wrapper } from './styled';
import Cells from './cell';

const WordsComponent = ({ solvedWords, level = []}) => {

  const levelWords = useMemo(() => [...level]
    .sort((a, b) => a.length - b.length)
    .map((word) => ({ word, idSolved: solvedWords.includes(word)})),
  [level, solvedWords]);

  return (
    <Wrapper>
      { levelWords.map((item, index) => (
          <Component key={index}>
            <Cells word={item.word} lineIndex={index} idSolved={item.idSolved}/>
          </Component>
        ))
      }
    </Wrapper>

);
};

WordsComponent.propTypes = {
  solvedWords: PropTypes.array,
  level: PropTypes.array,
};

export default WordsComponent;