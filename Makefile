build:
	npm run build

test:
	npm run test

release:
	npm run release

push:
	npm run push:git

publish: test build push release

