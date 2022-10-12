import userService from "../../services/userService";

export const request = {
  path: "/user/postUser",
  method: "post",
};

export const execute = async ({ body }) => {
  const result = await userService.postUser(body);
  return result;
};

export default execute;
