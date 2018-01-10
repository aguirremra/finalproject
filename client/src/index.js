import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { makeMainRoutes } from './routes';
import registerServiceWorker from './registerServiceWorker';

const routes = makeMainRoutes();

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();

/*
import React from "react";
import ReactDOM from "react-dom";
import App from "./newApp";
import "./index.css";

ReactDOM.render(<newApp />, document.getElementById("root"));
*/