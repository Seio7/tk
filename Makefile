netlify:
	npm install pug -g
	npm install staticrypt -g
	npm run build
	find . -type f -name "*.html" -exec staticrypt {} tktest \;
