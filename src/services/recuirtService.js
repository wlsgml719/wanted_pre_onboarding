import mRecuirt from '../models/mRecuirt';

export const getRecuirts = async () => {
    try {
        const result = await mRecuirt.findAll();
        return result;
    } catch (e) {
        throw e;
    }
}

export default { getRecuirts }