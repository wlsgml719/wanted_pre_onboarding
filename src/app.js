import express from 'express';

const appRun = async () => {
    const app = express();

    app.get('/', (req, res)=>{
        res.type('text/plain');
        res.status(200);
        res.send('Index');
    })

    return app
};

export default appRun;