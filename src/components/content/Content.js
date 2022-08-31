import { useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import { useState } from "react";
import styles from "./Content.module.css";
import deleteImg from "../../assets/delete.png";
import { users_per_page } from "../../config/config";
import Pagination from "../pagination/Pagination";
import { usersPerPage } from "../pagination/PaginationFunctions";
import userService from "../../services/userService";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { deleteUser, editUser } from "../../redux/usersSlicer";
import editImg from "../../assets/edit.png";
function Content() {
  const users = useSelector((stat) => stat.userSlicer.users);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const paginate = (number) => {
    setCurrentPage(number);
  };
  const deleteHandler = (id, index) => {
    userService.deleteUser(id).then(() => {
      dispatch(deleteUser(index));
    });
  };
  const onEditHandler = (el, index) => {
    dispatch(editUser({ user: el, index }));
  };
  return (
    <div className={styles.wrapper}>
      <table border={"1px"} className={styles.table}>
        <thead>
          <tr>
            <th>Address</th>
            <th>Age</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            usersPerPage(currentPage, users_per_page, users)?.map(
              (el, index) => {
                return (
                  <tr key={el.id}>
                    <td>{el.address}</td>
                    <td>{el.age}</td>
                    <td>{el.email}</td>
                    <td>{el.firstName}</td>
                    <td>{el.lastName}</td>
                    <td>{el.phone}</td>
                    <td>{el.role}</td>
                    <td>
                      <img
                        onClick={() => deleteHandler(el.id, index)}
                        className={styles.img}
                        alt="/"
                        src={deleteImg}
                      />
                    </td>
                    <td>
                      <img
                        onClick={() => onEditHandler(el, index)}
                        src={editImg}
                        className={styles.img}
                        alt="/"
                      />
                    </td>
                  </tr>
                );
              }
            )}
        </tbody>
      </table>
      <Pagination
        usersPerPage={users_per_page}
        totalUsers={users?.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
}

export default Content;
