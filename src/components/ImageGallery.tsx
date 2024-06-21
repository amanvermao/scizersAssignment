"use client"
import { useState } from 'react';
import styles from './ImageGallery.module.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const images: string[] = [
  'https://s3-alpha-sig.figma.com/img/539a/9458/51465ffc6ffa1fdaa99e3b69e97bde18?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LHXr73s7udACf3TYo8DikZw-osUmckYFrW0E9u26HVyYO19JZXIftBrJauNANkUSyIwsmIFfHa1o54ABiw44KUEzMfI2io9kiqmORo2LeFXQOlJbKko76DPv3~5qA8HhGr6skw3UCY3Kmd~RNMOy0v1oVtpJrxBZfZwEqajIBznI02JE7H2k42n5WaOM~vb2kFTdF6xJcJ6RvTWPU4~kCD-y6dfaO6Hw1oaKs6K-7i4U-poCPShdEOLzvn6Hm1wTuHUpePCT97XR1vTp7RrTv9r8nlqh0vtnds304iiPWeTSy2kfwyM2nKH1BJ805RCesyt9dW4xwfsFSVs~aTrt4w__',
  'https://s3-alpha-sig.figma.com/img/52bd/4473/9d3aa976cb9ff4100302d7e566a93010?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PoCfo~BPCge5A2x9tzXd1tU1PQ6KHa6peVTsaMz8Zw2ApsaAziWpyRw8EbmRX-Vcc~3HUB-uHkh6aI9GUxlx-AeIqSIulFRrSWIqvhOnp8f3qvi29HOFxzwa8e5nfUbq-oLnApG6V2GgHdX3pvGI9w82NrnGE5F5HmPROQQW9Aq7vC7DZP3KekO7~uxb1jotvJktYfZ9cRrwhvhg2sY3~bZU~wl~~IMxdS3PchIYITtW1xabZJ3EvZNbvQ-YJPlgb2LPqvStrRf92ZRnx2~2OafyaJ-SUTOAGIz3h9lJoBaOPvXIhIZ5dXaWc4212xe4jmULV0nrm0QAJXzTTaoBig__',
  'https://s3-alpha-sig.figma.com/img/99a7/bed1/8b24a656e8dc1f1aa924286733ab6141?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lru4aVB~AGSOT11rmm0s7uqC6dB8VTtF6S9oLzVcANtkOfrS91X4191R687JpgNJD4hxaQvTeJGmG6GP1MyRo3CAvO09Yrn070CzzoiSjQwT1zmA~Q4uZ0h1YG5r5kjNE7-~9rPqq019hn-IBiwROVqT5FmpXMuQ3FfYlSstVBFlYR2E0M66eJXgZHsCBn0iQaydFDQgbvBRYKmR1VJz6t-oZtvR2Q-AkaLdQF16Nq~NXSj1UCs5dfnVFnTsjSYGt0tqXecalNz2w3SIc8JzB7i4RIpT~LdZxhqV5F~hgO6~2GT9-q7ZViLI~GknKAFpO1aqRqNGkjotJUoXzy6uDg__',
  'https://s3-alpha-sig.figma.com/img/9774/c7c4/eb00973257c63ccc544b2553b0bcc8fc?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IGx5jxQjvMsLlPMNwvcOZrEgcCcgd-uQqqg5Sy4Fx645WgIY4sK~bQ9I-5TE30rlWDOz7TEhGdO5D~HWVFaqz7TJ-QO5JAx4Kay76Hkmr6G-~sTCPjXaz7a9Hj5kwwq5DMB~QyC4F62W8XVpUJmB4HtO9mlAev5BYuTalYJza21szHiSqtDd-lqYNa7NR6Aqvvf1hmFBr8CWGfgkP8vXgRnJWVfsZrHrfnSR0oYWWkH8fC2ohFPCARMYFVn2UVm0elFUhq~K4GvXpxyPlr~Udlu1SpDe5U2unIawzwlFiPeITQGOhA08JMWnbZzUeFxx030M50CzgPfV9VLvwb~vsQ__',
  'https://s3-alpha-sig.figma.com/img/fe74/8d0c/ff4d72c2404d943f7dc586b7bf15d714?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JW-rFRrUnNKh5J5XrSMyhB24ztZxYawlBxmMQaYACbq~eI9ZluEMmKcY2m84u3r6FqlkhN5pVs789-pclfzT8YFqWL2uKqRPtLzprP7Vl1LcKsefIC6QAmqBYGgOsAR0lCmN0KhbPIhH3IRAAFh6Yku-a5opEkEdUA2kmSGI8eHBkl2WQ5zWt-ECWvonS6ijg4UjpH~Eyswyn6efNgwuiYJzIGIZeUtONBuGYUYvZxR1bk9zrpiGJZXk9cY9nD2vl3fk6ZPlSr9r5ymEwb7BiK1W6aSOq2OXUQBYpzVpxLMDfZeg8iVwDvS3ISTASDA4qoQajuEU2ODird33SjXA6w__',
];

const ImageGallery: React.FC = () => {
  const [centerImage, setCenterImage] = useState<string>(images[0]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleImageClick = (image: string) => {
    setCenterImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleNextImage = () => {
    const currentIndex = images.indexOf(centerImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setCenterImage(images[nextIndex]);
  };

  const handlePrevImage = () => {
    const currentIndex = images.indexOf(centerImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCenterImage(images[prevIndex]);
  };

  const getThumbnails = () => {
    return images.filter(image => image !== centerImage).slice(0, 4);
  };

  return (
    <div className="text-center relative">
      <div className={styles.centerImageContainer}>
        <button className={`${styles.sliderButton} ${styles.leftButton}`} onClick={handlePrevImage}><ArrowBackIosIcon/></button>
        <img 
          src={centerImage} 
          alt="Center Image" 
          className={styles.centerImage} 
          onClick={() => setIsModalOpen(true)} 
        />
        <button className={`${styles.sliderButton} ${styles.rightButton}`} onClick={handleNextImage}><ArrowForwardIosIcon/></button>
      </div>
     <div className={styles.thumbnailContainerwrapper}>
     <div className={styles.thumbnailContainer}>
        {getThumbnails().map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt={`Thumbnail ${index + 1}`} 
            className={styles.thumbnail} 
            onClick={() => setCenterImage(image)} 
          />
        ))}
      </div>
     </div>
      {isModalOpen && (
        <div className={styles.modal} onClick={handleCloseModal}>
          <img 
            src={centerImage} 
            alt="Modal Image" 
            className={styles.modalImage} 
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}

      <section className='pt-16'>
        <div className={styles.footer}>
          <span>© DAMAC Copyright 2024 All rights reserved.</span>
        </div>
      </section>
    </div>

   
  );
};

export default ImageGallery;
