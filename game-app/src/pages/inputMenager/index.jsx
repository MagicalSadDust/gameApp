import { memo, useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setSolvedWords } from '../../store/reducers//levelSlice';
import { getMinimalLetterSet, removeWord, isObjectNotInArray } from '../../shared/model/extensions';
import { Container, Letters, InputLetter } from './styled';

const InputMenager = ({ level = [] }) => {
  const canvasRef = useRef(null);
  const [letters, setLetters] = useState([]);
  const [selectedPointLetters, setSelectedPointLetters] = useState([]);
  const [levelWords, setLevelWords] = useState(() => [...level]); 

  const dispatch = useDispatch();

  useEffect(() => {
    if (!level.length) return;
    setLevelWords([...level]);
  }, [level]);

  useEffect(() => {
    const minimalLetterSet = getMinimalLetterSet(level);
    setLetters(minimalLetterSet);
  }, [level]);

  useEffect(() => {
    if (!selectedPointLetters.length || !letters.length) return;
  
    const word = selectedPointLetters.reduce((acc, point) => {
      const { letter } = point;
      acc += letter;
      return acc;
    }, '');
  
    if (levelWords.includes(word)) {
      const unsolvedWords = removeWord(levelWords, word);
      setLevelWords(unsolvedWords);
      dispatch(setSolvedWords(word));
  
      const solvedWords = JSON.parse(localStorage.getItem('solvedWords') || '[]');
      if (!solvedWords.includes(word)) {
        localStorage.setItem('solvedWords', JSON.stringify([...solvedWords, word]));
      }
  
      setSelectedPointLetters([]);
    }
  
    if (selectedPointLetters.length === letters.length) {
      setSelectedPointLetters([]);
    }
  }, [selectedPointLetters, level, levelWords, letters, dispatch]);
  

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = Math.min(centerX, centerY) - 40;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#3E4A68';
    ctx.lineWidth = 20;        
    ctx.stroke();

    // Draw circles and letters
    const points = []
    for (let i = 0; i < letters.length; i++) {
      const angle = (i / letters.length) * Math.PI * 2 - Math.PI / 2
      const x = centerX + radius * Math.cos(angle)
      const y = centerY + radius * Math.sin(angle)
      points.push({ x, y, letter: letters[i] })

      const isSelected = selectedPointLetters.some((point) => point.x === x && point.y === y);

      ctx.beginPath()
      ctx.arc(x, y + 5, 40, 0, Math.PI * 2);
      ctx.fillStyle = isSelected ? '#AF638C': '#A6A8AB';
      ctx.fill();
      
      ctx.beginPath()
      ctx.arc(x, y, 40, 0, Math.PI * 2);
      ctx.fillStyle = isSelected ? '#E96FA4': '#ffffff';
      ctx.fill();

      document.fonts.ready.then(() => {
        ctx.font = `57px VAG World`;
        ctx.fillStyle = isSelected ? '#ffffff': '#4D4D4D';
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(letters[i], x, y)
      });
    }

    // Draw lines between selected letters
    if (selectedPointLetters.length > 1) {
      ctx.beginPath()
      ctx.moveTo(selectedPointLetters[0].x, selectedPointLetters[0].y)
      for (let i = 1; i < selectedPointLetters.length; i++) {
        ctx.lineTo(selectedPointLetters[i].x, selectedPointLetters[i].y)
      }
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.strokeStyle = '#638EC4'
      ctx.lineWidth = 15
      ctx.stroke()
    }
  }, [letters, selectedPointLetters])

  const handleCanvasClick = (event) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = Math.min(centerX, centerY) - 40

    for (let i = 0; i < letters.length; i++) {
      const angle = (i / letters.length) * Math.PI * 2 - Math.PI / 2
      const pointX = centerX + radius * Math.cos(angle)
      const pointY = centerY + radius * Math.sin(angle)

      if (Math.sqrt((x - pointX) ** 2 + (y - pointY) ** 2) < 40) {
        const newPoint = { x: pointX, y: pointY, letter: letters[i] }
        console.log('selectedPointLetters', newPoint, selectedPointLetters);
        if (isObjectNotInArray(newPoint, selectedPointLetters)) {
          setSelectedPointLetters(prev => [...prev, newPoint])
        }
        break
      }
    }
  }

  return (
    <Container>
      <Letters>
        {selectedPointLetters.map(({ letter }, index) => <InputLetter key={`${letter}${index}`}>{letter}</InputLetter>)}
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

InputMenager.propTypes = {
  level: PropTypes.array,
};

export default memo(InputMenager);