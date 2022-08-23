import express from 'express';
import getRoute from './route';

const appRun = async () => {
    const app = express();
    const route = await getRoute();

    app.get('/', (req, res)=>{
        res.type('text/plain');
        res.status(200);
        res.send('Index');
    })
    
    app.use('/v1', route);

    return app
};

export default appRun;