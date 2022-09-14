import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './Dropzone.scss';

export const Dropzone: React.FC = () => {
  // const [files, setFiles] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    // setFiles(acceptedFiles.map(file => Object.assign(file, {
    //   preview: URL.createObjectURL(file),
    // })));
    // eslint-disable-next-line no-console
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    // accept: 'image/jpeg, image/png',
  });

  // const thumbs = files.map(file => (
  //   <div key={file.name}>
  //     <img
  //       src={file.preview}
  //       alt={file.name}
  //     />
  //   </div>
  // ));

  // clean up
  // useEffect(() => () => {
  //   files.forEach(file => URL.revokeObjectURL(file.preview));
  // }, [files]);

  return (
    <section className="Dropzone">
      <div {...getRootProps({})}>
        <input className="Dropzone__input" {...getInputProps()} />
        <div className="Dropzone__text">Drag and drop your images here.</div>
      </div>
      <aside>
        {/* {thumbs} */}
      </aside>
    </section>
  );
};
