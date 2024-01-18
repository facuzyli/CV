import React from 'react';
import './Estudio.css'; // Asegúrate de importar tu archivo CSS

function Estudio({ studies }) {
  return (
    <div className="container">
      {studies.map((study, index) => (
        <div key={index} className="card-project">
          <div className="img_container">
            <img src={study.image} alt={study.title} />
          </div>
          <div className="content-card">
            <h2>{study.title}</h2>
            <p>{study.description}</p>
          </div>
          <div className="btn"></div>
        </div>
      ))}
    </div>
  );
}

export default Estudio;
