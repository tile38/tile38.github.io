# Build the the static website
build:
	cd website && npm install && npm run build

# Serve the website and allow for dynamic code updates.
live-serve: 
	cd website && npm install && npm run start

# Serve a static website which works like the live website.
serve: build
	python3 -m http.server --directory website/build/tile38.github.io/


# Publish the website lice to Github pages.
# Requires permission to the tile38/tile38.github.io repository.
publish: build
	cd website && \
	GIT_USER="$(shell git config user.name)" \
	CURRENT_BRANCH=master \
	USE_SSH=false \
	npm run publish-gh-pages
