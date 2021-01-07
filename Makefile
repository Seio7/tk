netlify:
	npm install pug -g
	npm install staticrypt -g
	npm run build
	find _site -name "*.html" -exec echo {} \;
	find _site -name "*.html" -exec staticrypt {} tktest \;
