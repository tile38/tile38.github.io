# Tile38 Website

This repository contains all of the files (excepting dependencies) necessary to edit, build, and deploy the [Tile38 documentation website](http://tile38.com).

## Table of Contents

- [Branches](#branches)
  - [Master](#master)
  - [Docusaurus](#docusaurus)
  - [gh-pages](#gh-pages)
- [Edit Content](#edit-content)
  - [Non-Admin Contributors](#non-admin-contributors)
  - [Admin Members](#admin-members)
    - [Clone Repo](#clone-repo)
    - [Via Local Machine](#via-local-machine)
    - [Via GitHub Repo](#via-github-repo)
- [Build](#build)
  - [Install NPM](#install-npm)
  - [Install Docusaurus Module](#install-docusaurus-module)
  - [Build Static Pages](#build-static-pages)
- [Test](#test)
- [Deploy](#deploy)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

# Branches

There are three main branches: master, docusaurus, and gh-pages.

## Master

The _master_ branch contains all documentation markdown (.md) and javascript (.js) files that must be edited to change the content on the documentation website

## Docusaurus

The Tile38 documentation website is built using a customized version of the [Docusaurus static website generator](http://docusaurus.io/). The _docusaurus_ branch contains the modified [React-based](https://reactjs.org/) Docusaurus component files required to build Tile38's documentation website. These files must be installed on your local machine using [npm](https://docs.npmjs.com/) or your favorite other JavaScript package manager in order to build and test changes to the website (see [Build](#build) section below for details).

## gh-pages

The _gh-pages_ branch contains the static website files for the Tile38 documentation website. These files are automatically generated from the markdown and other asset files found in the _master_ branch during the [build](#build) process. The [deploy](#deploy) process pushes the static website files to this branch.

**Never modify these files directly.**

# Edit Content

Only pages with an EDIT button can be modified by Non-Admin Contributors. The EDIT button can be found at the top right corner of the middle panel of any page found under the "Commands" or "Docs" categories of the [Tile38 documentation website](https://tile38.com/).

**_The EDIT button is not visible on screens smaller than 1,024 pixels wide._**

For instructions on how to edit content see:

- [Non-Admin Contributors](#non-admin-contributors)
- [Admin Members](#admin-members)

## Non-Admin Contributors

- todo

## Admin Members

### Clone Repo

If you have not done so already, clone this repo to your local machine:

```bash
git clone https://github.com/tile38/tile38.github.io.git
```

Make sure the _master_ branch is checked out:

```bash
git checkout master
```

There are two ways to edit content as an Admin Member:

- via your [local machine](#via-local-machine)
- via [GitHub's "Edit file" pane](#github-repo) for a file in the _master_ branch of this repository

### Via Local Machine

- On your local machine, navigate to the content's .md file, which should be found in either the `docs/commands` or `docs/topics` directories.

- Open the file in your favorite IDE or text/markdown editor and make the desired changes.

- After saving your changes, you are ready to [build](#build) and [deploy](#deploy) them.

### Via GitHub Repo

Content can be modified directly within this GitHub repo in one of two ways:

- You can find the .md files for content in either the `docs/commands` or `docs/topics` directories of this repo's _master_ branch and edit them directly from there.

  OR

- Navigate to the content that you would like to modify on the [Tile38 documentation website](http://tile38.com) and click on the EDIT button found in the top right corner of the page. The EDIT button links to the .md file for that content in this repo's _master_ branch.

Once you have navigated to the content's .md file:

- Click on the pencil icon in the right corner of the content pane's header menu.

- Make the desired changes to the .md file in GitHub's "Edit file" pane.

- Commit the changes.

- Pull the changed files down to the [cloned repo](#clone-repo) on your local machine (make sure you are on the _master_ branch).

  ```bash
  git pull
  ```

Your local copy of the repo should now be up to date. You are ready to [build](#build) and [deploy](#deploy) the changes.

# Build

It is not necessary to run the build process described below if you just want to deploy the website without testing it. The [deploy](#deploy) process builds the static website files before it publishes them to the _gh-pages_ branch, a redundant process if you are building and testing changes to the site as well. But that's the way the Docusaurus folks set things up, and we chose not to change it. And why would you want to deploy changes before testing them, really? You wouldn't do that, of course you wouldn't, so ...

## Install NPM

You will need to have [npm installed](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) in order to run the build command. To check if you have it installed, run the following at the command prompt:

```bash
npm -v
```

If you see `command not found: npm` in the output, go [install npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

## Install Docusaurus Module

In order to build and [test](#test) changes to website content, you will need to have the _docusaurus_ branch of this repo installed in the `./website/node_modules/docusaurus/` directory of the [cloned](#clone-repo) repo on your local machine. If that directory does not exist:

- At the command prompt, navigate to the `./website` directory of the [clone of this repo](#clone-repo) on your local machine.

- Run the install command:

  ```bash
  npm install
  ```

You should now have the most current version of our customized docusaurus component library installed with all its dependencies in the `./website/node_modules/` directory.

## Build Static Pages

The build command populates the `./website/build/` directory with all of the static website's files.

- Run the build command:

  ```bash
  npm run build
  ```

Any changes made to .md files in the _master_ branch of this repo should now be reflected in the content's .html files in the _gh-pages_ branch.

# Test

You can [test a local build of the website](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server) using Python's [simple HTTP Server](https://docs.python.org/2/library/simplehttpserver.html) if you have [Python installed](https://www.python.org/downloads/):

- At the command prompt, navigate to `./website/build/tile38.github.io`.
- Run Python's simple HTTP server:

  ```bash
  python -m SimpleHTTPServer # for Python version 2.x
  ```

  OR

  ```bash
  python3 -m http.server # for Python version 3.x
  ```

- Open a browser window and view the website at URL `localhost:8000`.

**If port 8000 is already in use, append the simple server command from above with a different port number, for example:**

```bash
python -m SimpleHTTPServer 3000 # for Python version 2.x
```

# Deploy

- At the command prompt, navigate to the `./website` directory of the [cloned](#clone-repo) version of this repo on your local machine.
- Run the publishing command (substitute your GitHub username for _yourGitHubUserName_ in the script below):

```bash
GIT_USER=yourGitHubUserName \
CURRENT_BRANCH=master \
USE_SSH=false \
npm run publish-gh-pages
```

Changes should be visible on the live [Tile38 Documentation website](<(http://tile38.com)>) almost immediately (or within 10 minutes according to GitHub). Sometimes Google Chrome does not reflect the changes right away. Check the site on other browsers (Safari, Firefox, etc.). If the changes you made are showing up on those browsers, then for Chrome try the following:

- Check/Uncheck the "disable cache" toggle in the Network tab of Chrome's developer tools.
- Refresh the page (Click the circular arrow button next to the address bar).
