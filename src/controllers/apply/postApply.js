import userService from "../../services/userService";

export const request = {
  path: "/apply/postApply",
  method: "post",
};

export const execute = async ({ body }) => {
  const result = await userService.postApply(body);
  return result;
};

export default execute;
