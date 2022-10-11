import * as companyService from "../../services/companyService";

export const request = {
  path: "/company/postCompany",
  method: "post",
};

export const execute = async ({ body }) => {
  const result = await companyService.postCompany(body);
  return result;
};

export default execute;
