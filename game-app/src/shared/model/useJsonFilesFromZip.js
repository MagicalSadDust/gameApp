import { useEffect, useState } from 'react';
import JSZip from 'jszip';
import levelsZip from 'Assets/levels.zip';

const useJsonFilesFromZip = () => {
    const [jsonFiles, setJsonFiles] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const loadZipFiles = async () => {
        try {
          const response = await fetch(levelsZip);
          const buffer = await response.arrayBuffer();
  
          const zip = await JSZip.loadAsync(buffer);
          const filePromises = [];
  
          zip.forEach((_relativePath, file) => {
            if (file.name.endsWith('.json')) {
              const filePromise = file.async('string').then((content) => ({
                name: file.name,
                content: JSON.parse(content),
              }));
              filePromises.push(filePromise);
            }
          });
  
          const files = await Promise.all(filePromises);
          setJsonFiles(files);
        } catch (err) {
          setError(`Error: ${err}`);
        }
      };
  
      loadZipFiles();
    }, []);
  
    return { jsonFiles, error };
  };

  export default useJsonFilesFromZip;