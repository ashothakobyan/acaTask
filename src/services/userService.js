import { API } from "../config/config";
class UserService {
  async getAllUsers() {
    const response = await fetch(API + "/users");
    const users = await response.json();
    return users;
  }
  async addUser(data) {
    const response = await fetch(API + "/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const user = await response.json();
    return user;
  }
  async deleteUser(id) {
    const response = await fetch(API + "/users/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const user = await response.json();
    return user;
  }
  async editUser(data) {
    const response = await fetch(API + "/users/" + data.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const user = await response.json();
    return user;
  }
}

const userService = new UserService();

export default userService;
