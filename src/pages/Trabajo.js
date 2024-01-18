import React, { useState } from 'react';
import { useLocalization } from '../LocalizationContext';
import './Trabajo.css';

function Trabajo() {
  const { t } = useLocalization();
  const [currentIndex, setCurrentIndex] = useState(0);
  const works = t('work', { returnObjects: true });

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === works.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? works.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id="container-slider">
      <button className="arrowPrev" onClick={goToPrev}>&#10094;</button>
      <button className="arrowNext" onClick={goToNext}>&#10095;</button>
      <ul id="slider">
        {works.map((work, index) => (
          <li key={index} className={index === currentIndex ? 'slide active' : 'slide'}>
            <img src="/assets/img/dikter.png" alt={work.title} />
            <div className="content_slider">
              <h2>{work.title}</h2>
              <div dangerouslySetInnerHTML={{ __html
: work.description }} />
<span className="work-date">{work.fecha}</span>
</div>
</li>
))}
</ul>
</div>
);
}

export default Trabajo;