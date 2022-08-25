import recuirtService from '../../services/recuirtService';

export const execute = async () => {
    try {
        const result = await recuirtService.getRequirts();
        return result;
    } catch (e) {
        throw e;
    }
};

export default execute;
