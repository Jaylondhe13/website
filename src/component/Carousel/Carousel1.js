import React, { useState, useEffect } from 'react';
import collegePhoto1 from '../../assets/img/collegePhoto1.jpg'
import collegePhoto2 from '../../assets/img/collegePhoto2.jpg'
import collegePhoto3 from '../../assets/img/collegePhoto3.jpg'

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import TextFloat from './TextFloat';

const items = [
  {
    src: collegePhoto1,
    altText: 'Slide 1',
    // caption: 'Slide 1',
    description: 'Description 1',
    key: 1,
  },
  {
    src: collegePhoto2,
    altText: 'Slide 2',
    // caption: 'Slide 2',
    description: 'Description 2',
    key: 2,
  },
  {
    src: collegePhoto3,
    altText: 'Slide 3',
    // caption: 'Slide 3',
    description: 'Description 3',
    key: 3,
  },
];

function Example() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [showText, setShowText] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
    setShowText(false);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
    setShowText(false);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
    setShowText(false);
  };

  const handleExiting = () => {
    setAnimating(true);
  };

  const handleExited = () => {
    setAnimating(false);
    setShowText(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowText(true);
    }, 1300);

    return () => clearTimeout(timeout);
  }, [activeIndex]);

  const slides = items.map((item) => (
    <CarouselItem
      onExiting={handleExiting}
      onExited={handleExited}
      key={item.src}
    >
      <img src={item.src} alt={item.altText} width="100%" height="480" 
      />
      <CarouselCaption
        captionHeader={item.caption}
      />
      {/* {showText && <TextFloat description={item.description} />} */}
    </CarouselItem>
  ));

  return (
    <div style={{ background: '#053750' }} className="mt-2">
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
}

export default Example;
