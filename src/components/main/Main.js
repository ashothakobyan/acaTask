import Content from "../content/Content";
import Header from "../header/Header";
import styles from "./Main.module.css";
function Main() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Content />
    </div>
  );
}

export default Main;
