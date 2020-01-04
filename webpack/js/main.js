import "core-js/stable/symbol";
import "core-js/stable/array";
import "core-js/stable/object";
import "core-js/stable/promise";
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