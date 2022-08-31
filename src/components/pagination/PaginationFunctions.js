const usersPerPage = (currentPage, usersPerPage, users) => {
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  return currentUsers;
};

export { usersPerPage };
