import styles from "./Header.module.css";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { changeAddModalState } from "../../redux/usersSlicer";
function Header() {
  const dispatch = useDispatch();
  const changeModalState = () => {
    dispatch(changeAddModalState());
  };
  return (
    <div className={styles.wrapper}>
      <h1>All Users</h1>
      <button className={styles.button} onClick={changeModalState}>
        Add User
      </button>
    </div>
  );
}

export default Header;
