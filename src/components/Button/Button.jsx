import styles from './Button.module.css';

const Button = ({ title, handleClick, id = null }) => {
  return (
    <button onClick={() => handleClick(id)} className={styles.button}>
      {`${title} `}
      <span role="img" aria-label="delete icon">
        ❌
      </span>
    </button>
  );
};

export default Button;
