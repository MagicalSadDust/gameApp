import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useJsonFilesFromZip from '../shared/model/useJsonFilesFromZip';
import { GlobalStyle, ApplicationLayout } from './styled';
import Panel from '../pages/panel';
import { setJsonFiles } from '../store/reducers/levelSlice';

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
    if (!localStorage.getItem('currentLevel')) localStorage.setItem('currentLevel', '1')
  }, [])
   
  return (
    <ApplicationLayout>
      <GlobalStyle />
      <Panel />
    </ApplicationLayout>
  )
}

export default Home;
