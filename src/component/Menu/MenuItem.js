import React, { useState } from 'react';
import './MenuItem.css';
import { Link, useNavigate } from 'react-router-dom';

function MenuItem({ label, model }) {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleClick = (pdfUrl, path) => {
    if (pdfUrl) {
      openPDF(pdfUrl);
    } else if (path) {
      navigate(path);
      setIsHovering(false);
    }
  };

  const openPDF = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="menu-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={()=>label==='HOME'?navigate('/'):''}>
      {label}

      {isHovering && label!=='HOME' && (
        <div className="menu-model">
          {model && model.map((section, index) => (
            <div key={index}>
              <div className="model-title">{section.title}</div>
              <div className="model-content">
                {section.content && section.content.map((item, i) => (
                  <div key={i} className="content-item" onClick={() => handleClick(item.pdfUrl, item.path)}>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MenuItem;
