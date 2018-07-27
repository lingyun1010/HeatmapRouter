import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import HeatmapShowcase from './HeatmapShowcase-dropbox'

ReactDOM.render(<Router><HeatmapShowcase  /></Router>, document.getElementById('root'));
//registerServiceWorker();
