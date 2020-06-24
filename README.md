# Table of Contents

- [Repo Contents](#repo-contents)
  - [Master Branch](#master-branch)
  - [Docusaurus Branch](#docusaurus-branch)
  - [gh-pages Branch](#gh-pages-branch)
- [Edit Content](#edit-content)
  - [Non-Admin Contributors](#non-admin-contributors)
  - [Admin Members](#admin-members)
    - [Via Local Machine](#via-local-machine)
    - [Via GitHub Repo](#via-github-repo)
- [Build](#build)
- [Deploy](#deploy)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

# Repo Contents

This repository contains all of the files (excepting dependencies) necessary to edit, build, and deploy the [Tile38 documentation website](http://tile38.com).

There are three main branches: master, docusaurus, and gh-pages.

## Master Branch

The _master_ branch contains all documentation markdown (.md) and javascript (.js) files that must be edited to change the content on the documentation website

## Docusaurus Branch

The Tile38 documentation website is built using a customized version of the [Docusaurus static website generator](http://docusaurus.io/). The _docusaurus_ branch contains the modified [React-based](https://reactjs.org/) Docusaurus component files required to build Tile38's documentation website. These files must be installed on your local machine using [npm](https://docs.npmjs.com/) or [yarn](https://classic.yarnpkg.com/en/docs) in order to build and test changes to the website (see [Build](#build) section below for details).

## gh-pages Branch

The _gh-pages_ branch contains the static website files for the Tile38 documentation website. These files are automatically generated from the markdown and other asset files found in the _master_ branch during the [build](#build) process. The [deploy](#deploy) process pushes the static website files to this branch.

**Never modify these files directly.**

# Edit Content

Only pages with an EDIT button can be modified by non-admin contributors. The EDIT button can be found at the top right corner of the middle panel of any page found under the "Commands" or "Docs" categories of the [Tile38 documentation website](https://tile38.com/).

**_The EDIT button is not visible on screens smaller than 1,024 pixels wide._**

If you are an Admin Member of this repository, follow the instructions in the [Admin Members](#admin-members) section of this document to edit content; otherwise see the [Non-Admin Contributors](#non-admin-contributors) section.

## Non-Admin Contributors

- todo

## Admin Members

There are two ways to edit content as an Admin Member: on your [local machine](#local-machine) (least complicated method) or via [GitHub's "Edit file" pane](#github-repo) for a file in the _master_ branch of this repository.

If you have not done so already, clone this repo to your local machine:

```shell
git clone https://github.com/tile38/tile38-stage.git
```

Make sure the _master_ branch is checked out:

```shell
git checkout master
```

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

- Click on the pencil icon in the right corner of the content pane's header menu. and commit them.

- Make the desired changes to the .md file in GitHub's "Edit file" pane.

- Commit the changes.

- Pull the changed files down to the cloned repo on your local machine.

  ```shell
  git pull
  ```

Your local copy of the repo should now be up to date. You are ready to [build](#build) and [deploy](#deploy) the changes.

# Build

- todo

# Deploy

- todo
