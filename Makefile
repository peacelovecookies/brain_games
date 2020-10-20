install:
	npm-install
start:
	npx babel-node src/bin/brain-games.js
pubslish:
	npm publish --dry-run
