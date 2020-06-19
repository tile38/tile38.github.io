# Tile38 Static Website Generation Documentation

This repository contains all of the files (excepting dependencies) necessary to compile and deploy the [Tile38 documentation website](http://tile38.com).

## Repo Branches

There are three main branches: master, docusaurus, and gh-pages.

### Master Branch

The _master_ branch contains all documentation markdown (.md) and javascript (.js) files that must be edited to change the content on the documentation website

### Docusaurus Branch

The Tile38 documentation website is built using a customized version of the [Docusaurus static website generator](http://docusaurus.io/). The _docusaurus_ branch contains the modified [React-based](https://reactjs.org/) Docusaurus component files required to build Tile38's documentation website. These files must be installed on your local machine using [npm](https://docs.npmjs.com/) or [yarn](https://classic.yarnpkg.com/en/docs) in order to build and test changes to the website (see [Build](#build) section below for details).

### gh-pages Branch

The _gh-pages_ branch contains the static website files for the Tile38 documentation website. These files are automatically generated from the markdown and other asset files found in the _master_ branch during the [build](#build) process. The [deploy](#deploy) process pushes the static website files to this branch.

**Never modify these files directly.**

## Static Website Generation Process

### Edit Content

Only pages with an EDIT button can be modified. The EDIT button can be found at the top right corner of the middle panel of any page found under the "Commands" or "Docs" categories.

**The EDIT button is not visible on screens smaller than 1,024 pixels wide.**

#### Admin Members

#### Other Contributers

### Build

### Deploy
