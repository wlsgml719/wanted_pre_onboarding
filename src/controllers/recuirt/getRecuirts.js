import requirtService from '../../services/requirtService';

export const execute = async () => {
    try {
        const result = await requirtService.getRequirts();
        return result;
    } catch (e) {
        throw e;
    }
};

export default execute;
