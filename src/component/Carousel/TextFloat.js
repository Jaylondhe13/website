import styles from './TextFloat.module.css';

const TextFloat = () => {
    return (
        <div>
            <div className={styles.floatingText}>
        {/* Your content goes here */}
        <p>This text will float from the right.</p>
      </div>

        </div>
      
    );
  };
  
  export default TextFloat;