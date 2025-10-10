# Overview

This is a website originally published at www.ambthair.com, an air conditioning company which was run by my dad, Mike Hardy.  My dad passed away in September 2025. I decided to keep the site online as an archive of his articles.

The site uses eleventy to statically generate the site. 

A slightly customised version of Bootstrap is used for the site.

# Development

## Setup

```bash
# install exact package versions in package.json. Used node v20
npm install ci

# install latest matching packages
npm install
```

## Build and deploy

```bash
# Build the HTML templates once
npm run build

# Purge the CSS (generates bootstrap.purge.min.css)
npm run build:css

# Build the templates and start the live preview server
npm start

# Deploy
npm run deploy
```

## Other scripts

### scripts/create_redirects.js

This writes redirect objects to the s3 bucket for certain files so that they get HTTP redirects. (This is defunct now)

# Bootstrap

## Bootstrap theme

`src/styles/bootstrap.min.css` was generated with the following steps using bootswatch - see https://bootswatch.com/help/

Theme is called Flatly

To customise, clone bootswatch repo. Added to `dist/flatly/_variables.scss` near the top:

```scss
// override flatly defaults
$ambthairgreen: #246b61 !default;
$ambthairorange: #ffceab !default;
$primary: $ambthairgreen;
$success: $ambthairgreen;
$navbar-dark-hover-color: $ambthairorange;
$dropdown-link-color: $gray-800;
```

Build with `grunt swatch:flatly`, and copy the resulting bootstrap.min.css to `src/styles`.

To remove unneeded css, edit `build/scss/build.scss`:
1. Copy import statements in `../../node_modules/bootstrap/scss/bootstrap.scss` in
2. Edit their paths to correct to `../../node_modules/bootstrap/scss/`
3. Comment out the includes not needed
4. Rebuild

The `@import` for the font near the top of bootstrap.min.css was manually replaced with the css2 version for Google Fonts:
```css
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&display=swap');
```

To purge the css run `npm run build:css`

## Bootstrap templates used for pages

From startbootstrap - templates based on https://startbootstrap.com/templates/modern-business/
