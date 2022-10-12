import userService from "../../services/userService";

export const request = {
  path: "/apply/getApply",
  method: "get",
};

export const execute = async ({ query }) => {
  const result = await userService.getUserApply(query.id);
  return result;
};

export default execute;
