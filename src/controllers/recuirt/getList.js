export const execute = async ({ path, query }) => {
    console.log(path, query);
    return 'LIST';
};

export default execute;
