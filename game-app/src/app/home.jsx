import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setStoredWords } from 'Store/reducers/levelSlice';
import useJsonFilesFromZip from 'Model/useJsonFilesFromZip';
import { setJsonFiles } from 'Store/reducers/levelSlice';
import { GlobalStyle, ApplicationLayout } from './styled';
import Panel from '../pages/panel';

const Home = () => {
  const { jsonFiles } = useJsonFilesFromZip();
  const dispatch = useDispatch();


  useEffect(() => {
    if (jsonFiles && jsonFiles.length > 0) {
      jsonFiles.forEach(async (file) => {   
        dispatch(setJsonFiles({[file.name]: file.content.words}));
      });
    }
  }, [dispatch, jsonFiles]);

  useEffect(() => {
    if (!localStorage.getItem('currentLevel')) localStorage.setItem('currentLevel', '1');
  }, [])

  useEffect(() => {
    const solvedWords = JSON.parse(localStorage.getItem('solvedWords') || '[]');
    if (solvedWords.length !== 0) dispatch(setStoredWords(solvedWords));
  }, [dispatch])
   
  return (
    <ApplicationLayout>
      <GlobalStyle />
      <Panel />
    </ApplicationLayout>
  )
}

export default Home;
