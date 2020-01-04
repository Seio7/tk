import initNavigation from "./navigation";
import initNetlify from "./netlify";
import Highway from './highway';
import app from './app';

IntersectionObserver.prototype.POLL_INTERVAL = 100;
initNavigation();
initNetlify();
Highway();
app();