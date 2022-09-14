import React, { useCallback, useState } from 'react';
import { FileWithPath, useDropzone } from 'react-dropzone';
import cuid from 'cuid';
import './DropzoneCopy.scss';
import { CustomImage } from '../../types/CustomImageType';
import { ImageGrid } from '../ImageGrid';

export const DropzoneCopy: React.FC = () => {
  const [images, setImages] = useState<CustomImage[]>([]);

  // eslint-disable-next-line no-console
  console.log(images);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.map((file: File) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        setImages((prevState) => [
          ...prevState,
          { id: cuid(), src: event.target?.result || null },
        ]);
      };

      reader.readAsDataURL(file);

      return file;
    });
  }, []);

  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    isDragActive,
  } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.png'],
      'text/html': ['.html', '.htm'],
    },
  });

  const files = acceptedFiles.map((file: FileWithPath) => (
    <li
      key={file.path}
      className="DropzoneCopy__item"
    >
      {`${file.path} - ${file.size} bytes`}
    </li>
  ));

  return (
    <>
      <div className="DropzoneCopy">
        <div {...getRootProps({ className: 'DropzoneCopy__zone' })}>
          <input className="DropzoneCopy__input" {...getInputProps()} />
          <div className="DropzoneCopy__content">
            {isDragActive
              ? (
                <p className="DropzoneCopy__text">
                  Release to drop the files here
                </p>
              )
              : (
                <p className="DropzoneCopy__text">
                  Drag’n’drop some files with images here, or click to select files
                </p>
              )}
            <aside className="DropzoneCopy__files">
              <ul className="DropzoneCopy__list">
                {files}
              </ul>
            </aside>
          </div>
        </div>
      </div>
      <ImageGrid images={images} />
    </>
  );
};
