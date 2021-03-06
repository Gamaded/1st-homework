import express from 'express';
import ReactDOM from 'react-dom/server';
import {Header} from '../shared/header';
import {indexTemplate} from './indexTemplate';

const app = express();

app.get('/', (req, res) => {
	res.send(
		indexTemlate(ReactDOM.renderToString(Header())),
	);
});

app.listen(3000, () => {
	console.log('server started on http://localhost:3000');
});