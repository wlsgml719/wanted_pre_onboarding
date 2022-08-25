import mRequirt from '../models/mRequirt';

export const getRequirts = async () => {
    try {
        const result = await mRequirt.findAll();
        return result;
    } catch (e) {
        throw e;
    }
}

export default { getRequirts }