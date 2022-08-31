import Error from "../error/Error";
import styles from "./MyInput.module.css";

function MyInput({ info, value, changeFormStateValue, errMessage, edit }) {
  const { type, placeholder, name } = info;
  const onChangeHandler = (value) => {
    changeFormStateValue(name, value);
  };
  function dateIsValid(date) {
    return !Number.isNaN(new Date(date).getTime());
  }

  return (
    <div className={styles.wrapper}>
      {errMessage ? <Error message={errMessage} /> : ""}
      <label htmlFor={name}>{placeholder}</label>
      <input
        id={name}
        value={value}
        className={`${styles.input} ${errMessage ? styles.error : ""}`}
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
    </div>
  );
}

export default MyInput;
