import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import roadsRouter from './resources/roads/roads.router';

export const app = express();

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use('/api/roads', roadsRouter);
app.use('/api', (req, res) => {
    res.json({ info: 'Node.js, Express, and Postgres API' });
});

export const start = async () => {
    try {
        app.listen(config.port, () => {
            console.log(`API listing on http://localhost:${config.port}/api`);
        });
    } catch (e) {
        console.error(e);
    }
};
