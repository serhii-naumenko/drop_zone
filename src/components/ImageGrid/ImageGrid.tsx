import React from 'react';
import { CustomImage } from '../../types/CustomImageType';
import './ImageGrid.scss';

type Props = {
  images: CustomImage[]
};

type Props2 = {
  image: CustomImage
};

const Image = ({ image }: Props2) => {
  if (typeof image.src !== 'string') {
    return null;
  }

  return (
    <div className="file-item">
      <img
        alt={`img - ${image.id}`}
        src={image.src}
        className="file-img"
      />
    </div>
  );
};

export const ImageGrid: React.FC<Props> = ({ images }) => {
  const renderImage = (image: CustomImage) => {
    return (
      <Image
        image={image}
        key={`${image.id}-image`}
      />
    );
  };

  return (
    <section className="file-list">{images.map(renderImage)}</section>
  );
};
