import styles from './TextFloat.module.css';

const TextFloat = (props) => {
  return (
    <div>
      <div className={styles.floatingText}>
        {/* Your content goes here */}
        <h1>{props.description}</h1>
        <p>{props.description}</p>
      </div>

    </div>

  );
};

export default TextFloat;