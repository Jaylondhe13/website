import React, { useState } from 'react';
import './MenuItem.css';
import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom';

function MenuItem({ label, model }) {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="menu-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={()=>label==='HOME'?navigate('/'):""}>
     
      {label}
      

      {isHovering && label!=='HOME' && (
        <div className="menu-model">
          {model.map((section, index) => (
            <div key={index}>
              <div className="model-title">{section.title}</div>
              <div className="model-content">
                {section.content.map((item, i) => (
                  <Link to='/about'  key={i} className="content-item">{item}</Link>
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
