import Image from 'next/image';

interface LinkedImageProps {
  image: any;
  alt: string;
  link: string;
}

type LinkedImages = {
  images: LinkedImageProps[];
  columns?: 5 | 6;
}

const LinkedImageList = ({ images, columns = 5 }: LinkedImages) => {
  return (
    <div className={`grid gap-12 ${columns === 5 ? "grid-cols-5" : "grid-cols-6"}`}>
      {images.map((image) => (
        <div key={image.alt} className="flex justify-center basis-1/3">
          <a href={image.link} target='blank' referrerPolicy="no-referrer">
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
