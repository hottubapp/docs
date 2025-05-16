# Hot Tub Docs Site

This repository contains the documentation and knowledge base for the Hot Tub app. Here, you will find comprehensive guides, API references, and other resources to help you understand and utilize the features of the Hot Tub platform effectively.

## About

The docs site is built with [MkDocs](https://www.mkdocs.org) which generates static sites from markdown files. Super easy, super cool, very nice.

Basically it means we (or you) can quickly and easily update documentation or other resources.

## Setup

You can get the site up and running locally in just a couple steps:

1. Clone the repo

```bash
git clone https://github.com/hottubapp/docs.git hottubapp-docs
```

2. Change directories into the pulled repository

```bash
cd ./hottubapp-docs
```

3. Install the dependencies

```bash
pip install -r requirements.txt
```

4. Serve MkDocs locally

```bash
mkdocs serve -a 127.0.0.1:8000
```

With any luck, the site should now be running on your local machine on port 8000. Play around, make the changes you want, and send them our way!

## Submitting Changes

To contribute your changes to the documentation:

1. Fork the repository

   - Go to the [Hot Tub Docs repository](https://github.com/hottubapp/docs)
   - Click the "Fork" button in the top right
   - This creates your own copy of the repository

2. Clone your fork

```bash
git clone https://github.com/YOUR-USERNAME/docs.git
cd docs
```

3. Create a new branch for your changes

```bash
git checkout -b your-branch-name
```

4. Make your changes and commit them

```bash
git add .
git commit -m "Description of your changes"
```

5. Push your branch to your fork

```bash
git push origin your-branch-name
```

6. Create a Pull Request
   - Go to your fork on GitHub
   - Click "New Pull Request"
   - Select your branch
   - Fill in the PR description with details about your changes
   - Submit the PR for review

We'll review your changes and merge them if everything looks good. Thanks for contributing!
