import styles from "./AddUserModal.module.css";
import { useSelector } from "react-redux/es/exports";
import {
  inputInfo,
  initialValueState,
} from "../../../config/modals/addUserModal";
import MyInput from "../myInput/MyInput";
import MySelect from "../mySelect/MySelect";
import { useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import ModalHeader from "../modalHeader/ModalHeader";
import { addUser, changeAddModalState } from "../../../redux/usersSlicer";
import userValidation from "../../../validation/userValidation";
import userService from "../../../services/userService";
import { v4 as uuidv4 } from "uuid";
function AddUserModal({ modalState }) {
  const [formState, setFormState] = useState(initialValueState);
  const [errorState, setErrorState] = useState({});
  const dispatch = useDispatch();
  const state = modalState ? styles.open : "";
  const changeFormStateValue = (name, value) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const changeModalState = () => {
    dispatch(changeAddModalState());
  };
  const addUserHandler = (e) => {
    e.preventDefault();
    const validate = userValidation.validate(formState);
    if (!validate.result) {
      setErrorState(validate.errors);
    } else {
      setErrorState({});
      const data = { id: uuidv4(), ...formState };
      userService.addUser(data).then(() => {
        setFormState(initialValueState);
        dispatch(addUser(data));
      });
    }
  };
  return (
    <div className={[styles.wrapper, state].join(" ")}>
      <ModalHeader title={"Add User"} onClick={changeModalState} />
      <form
        onSubmit={(e) => {
          addUserHandler(e);
        }}
        className={styles.content}
      >
        {inputInfo.map((el, index) => {
          return el.element === "input" ? (
            <MyInput
              errMessage={errorState[el.name]}
              changeFormStateValue={changeFormStateValue}
              value={formState[el.name]}
              info={el}
              key={index}
            />
          ) : (
            <MySelect
              errMessage={errorState[el.name]}
              changeFormStateValue={changeFormStateValue}
              value={formState[el.name]}
              info={el}
              key={index}
            />
          );
        })}

        <button className={styles.button}>Add</button>
      </form>
    </div>
  );
}

export default AddUserModal;
