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
    <div className="container align-middle grid grid-flow-col auto-cols-fr justify-between pb-2 px-4 lg:px-10 w-full">
      {images.map((image) => (
        <div key={image.alt} className="flex justify-center">
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
