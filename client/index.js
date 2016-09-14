import React from 'react';
import routes from './config/routes';
import { render } from 'react-dom';

require('./stylesheets/main.scss');

render(routes, document.getElementById('app'));
