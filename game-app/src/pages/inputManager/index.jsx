import { memo } from 'react';
import PropTypes from 'prop-types';
import useViewport from 'Model/useViewport';
import { Container, Letters, InputLetter } from './styled';
import useInputManager from './useInputManager';

const InputManager = ({ level = [] }) => {
  const {
    canvasRef,
    selectedPointLetters,
    handleCanvasClick
  } = useInputManager(level);

  const { width, height } = useViewport();
  
  return (
    <Container>
      <Letters>
        {selectedPointLetters.map(({ letter }, index) => (
          <InputLetter key={`${letter}${index}`}>{letter}</InputLetter>
        ))}
      </Letters>
      <canvas
        ref={canvasRef}
        width={width < 450 ? 290 : 357}
        height={height < 933 ? 304 : 371}
        onClick={handleCanvasClick}
      />
    </Container>
  );
};

InputManager.propTypes = {
  level: PropTypes.array,
};

export default memo(InputManager);
