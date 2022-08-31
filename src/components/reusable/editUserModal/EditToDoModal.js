import styles from "./EditToDoModal.module.css";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useEffect, useState } from "react";
import {
  initialValueState,
  inputInfo,
} from "../../../config/modals/addUserModal";
import { changeEditModalState, editUserData } from "../../../redux/usersSlicer";
import ModalHeader from "../modalHeader/ModalHeader";
import MyInput from "../myInput/MyInput";
import MySelect from "../mySelect/MySelect";
import userService from "../../../services/userService";
import userValidation from "../../../validation/userValidation";

function EditToDoModal() {
  const editingUser = useSelector((state) => state.userSlicer.editingUser);
  const [errorState, setErrorState] = useState({});
  const [currentItem, setCurrentItem] = useState(initialValueState);
  useEffect(() => {
    setCurrentItem(editingUser.user);
  }, [editingUser]);
  const dispatch = useDispatch();

  const changeModalState = () => {
    dispatch(changeEditModalState());
  };
  const changeFormStateValue = (name, value) => {
    setCurrentItem({
      ...currentItem,
      [name]: value,
    });
  };
  const changeUserHandler = (e) => {
    e.preventDefault();
    const validate = userValidation.validate(currentItem);
    if (!validate.result) {
      setErrorState(validate.errors);
    } else {
      setErrorState({});
      const data = { ...currentItem };
      userService.editUser(data).then(() => {
        setCurrentItem(initialValueState);
        dispatch(editUserData({ user: data, index: editingUser.index }));
      });
    }
  };
  return (
    <div className={styles.wrapper}>
      <ModalHeader title={"Edit Task"} onClick={changeModalState} />
      <form
        onSubmit={(e) => {
          changeUserHandler(e);
        }}
        className={styles.content}
      >
        {inputInfo.map((el, index) => {
          return el.element === "input" ? (
            <MyInput
              errMessage={errorState[el.name]}
              changeFormStateValue={changeFormStateValue}
              value={currentItem[el.name]}
              info={el}
              key={index}
              edit={true}
            />
          ) : (
            <MySelect
              errMessage={errorState[el.name]}
              changeFormStateValue={changeFormStateValue}
              value={currentItem[el.name]}
              info={el}
              key={index}
            />
          );
        })}

        <button className={styles.button}>Edit</button>
      </form>
    </div>
  );
}
export default EditToDoModal;
