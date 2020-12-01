build:
	cd website && \
	npm install && \
	npm run build
	
serve: build
	python3 -m http.server --directory website/build/tile38.github.io/

publish: build
	cd website && \
	GIT_USER="$(shell git config user.name)" \
	CURRENT_BRANCH=master \
	USE_SSH=false \
	npm run publish-gh-pages
