# Webpack

## Setup

`npm init -y`
`npm i autoprefixer babel-cli babel-core babel-loader babel-preset-latest babel-watch css-loader extract-loader file-loader html-loader node-sass postcss-loader pug pug-html-loader sass-loader style-loader webpack webpack-dev-server --save` 

## Stage 1 - Command Line

`mkdir -p dist`
`./node_modules/.bin/node-sass --output-style compressed app/app.sass > dist/app.css`

## Stage 2 - Watch

`mkdir -p dist`
`./node_modules/.bin/node-sass --watch --recursive --output dist/ --source-map true --source-map-contents app/`

## Stage 3 - Webpack

1. Change the port **10201** in `package.json`
2. `npm start`
3. Url: http://luffy.ee.ncku.edu.tw:[YOUR_PORT]

