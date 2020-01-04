import "core-js/stable";
import regeneratorRuntime from "regenerator-runtime";
import 'whatwg-fetch';
import initNavigation from "./navigation";
import initNetlify from "./netlify";
import Highway from './highway';
import app from './app';

initNavigation();
initNetlify();
Highway();
app();