import PropTypes from 'prop-types';
import { CellContainer } from './styled';

const Cells = ({ word, lineIndex, idSolved }) => {
  const letters = word.split('');
  const storedLevel = Number(localStorage.getItem('currentLevel')) || 1;

  return (
    <>
      {letters.map((letter, index) => {
        const key = `${letter}-${lineIndex}-${index}`;
          return (
            <CellContainer key={key} storedLevel={storedLevel} idSolved={idSolved}>
                {idSolved ? letter.toUpperCase() : ''}
            </CellContainer>
          );
        })}
    </>
  );
};

Cells.propTypes = {
  word: PropTypes.string.isRequired,
  lineIndex: PropTypes.number.isRequired,
  idSolved: PropTypes.bool.isRequired,
};

export default Cells;
