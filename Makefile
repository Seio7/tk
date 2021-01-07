netlify:
	npm install pug -g
	npm run build
	find _site/. -type f -name "*.html" -exec npx staticrypt {} tktest \;
