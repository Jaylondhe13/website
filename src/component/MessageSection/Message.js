import React from 'react';
import styles from './Message.module.css'; // Import the CSS module

const Message = ({ title, name, position, qualifications, message, image }) => {
  return (
    <div className={styles.messageContainer}>
      <img src={image} alt={name} className={styles.messageImage} />
      <div>
        <h3 className='mt-5'>{title}</h3>
        <p>{message}</p>
        <h5>{name}</h5>
        {position && <p>{position}</p>}
        {qualifications && <p>{qualifications}</p>}
      </div>
    </div>
  );
}

export default Message;
