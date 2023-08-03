# Add libraryes:

## PropTypes

https://www.npmjs.com/package/prop-types

- npm install --save prop-types

### --> use in js/jsx

- import PropTypes from 'prop-types';

## Emotion

https://emotion.sh/docs/install

- npm install --save @emotion/react
- npm install --save @emotion/styled

### --> use in js/jsx

- import { css } from '@emotion/react'
- import styled from '@emotion/styled'

## GitHub - gh-pages

https://create-react-app.dev/docs/deployment/

1. add homepage - "homepage": "https://myusername.github.io/my-app"
2. npm install --save gh-pages
3. add in "scripts": {

- "predeploy": "npm run build",
- "deploy": "gh-pages -d build",}

4. npm run deploy</p>

## Nanoid

https://www.npmjs.com/package/nanoid

- npm i nanoid

### --> use in js/jsx

- import { nanoid } from 'nanoid'
- model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"
