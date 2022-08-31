import "./App.css";
import Main from "./components/main/Main";
import { useSelector } from "react-redux/es/exports";
import AddUserModal from "./components/reusable/addUserModal/AddUserModal";
import { useEffect } from "react";
import userService from "./services/userService";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setUser } from "./redux/usersSlicer";
import EditUserModal from "./components/reusable/editUserModal/EditToDoModal";
function App() {
  const { editPopUpState, addPopUpState } = useSelector(
    (stat) => stat.userSlicer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    userService.getAllUsers().then((users) => dispatch(setUser(users)));
  }, []);
  return (
    <>
      <div
        className={` App ${editPopUpState || addPopUpState ? "modalOpen" : ""}`}
      >
        <Main />
      </div>
      {addPopUpState && <AddUserModal modalState={addPopUpState} />}
      {editPopUpState && <EditUserModal />}
    </>
  );
}

export default App;
