import { memo } from 'react';
import PropTypes from 'prop-types';
import { Container, Letters, InputLetter } from './styled';
import useInputManager from './useInputManager';

const InputManager = ({ level = [] }) => {
  const {
    canvasRef,
    selectedPointLetters,
    handleCanvasClick
  } = useInputManager(level);

  return (
    <Container>
      <Letters>
        {selectedPointLetters.map(({ letter }, index) => (
          <InputLetter key={`${letter}${index}`}>{letter}</InputLetter>
        ))}
      </Letters>
      <canvas
        ref={canvasRef}
        width={357}
        height={371}
        onClick={handleCanvasClick}
      />
    </Container>
  );
};

InputManager.propTypes = {
  level: PropTypes.array,
};

export default memo(InputManager);
