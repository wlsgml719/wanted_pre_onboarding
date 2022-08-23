const http = require('http');
const appRun = require('./app').default;

appRun().then(app => {
    const server = http.createServer(app);
    const port = process.env.PORT || 3900;

    server.listen(port, () => {
        console.log(`Server is running on ${port} port`);
    });
});