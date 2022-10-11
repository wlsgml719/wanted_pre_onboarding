import recuirtService from "../../services/recuirtService";

export const request = {
  path: "/recuirt/searchRecuirt",
  method: "get",
};

export const execute = async ({ query }) => {
  const result = await recuirtService.searchRecuirts(
    query.search,
    query?.offset,
    query?.limit
  );
  return result;
};

export default execute;
