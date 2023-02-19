import Image from 'next/image';

interface LinkedImageProps {
  image: any;
  alt: string;
  link: string;
}

interface LinkedImages {
  images: LinkedImageProps[];
}

const LinkedImageList = ({ images }: LinkedImages) => {
  return (
    <div className="flex max-lg:flex-wrap justify-center">
      {images.map((image) => (
        <div key={image.alt} className="flex justify-center basis-1/3">
          <a href={image.link}>
            <Image
              className="p-3 object-contain max-h-32"
              src={image.image}
              alt={image.alt}
            />
          </a>
        </div>
      ))}
    </div>
  );
};
export default LinkedImageList;
