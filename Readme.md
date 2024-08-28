
##### Rollup plugins: for bundling, typescript, css, and dts

```bash
npm i --save-dev @rollup/plugin-node-resolve @rollup/plugin-typescript @rollup/
plugin-commonjs rollup-plugin-postcss rollup-plugin-dts
```

##### Rollup plugins: for minifying, and live reload

```bash
npm i --save-dev rollup-plugin-terser rollup-plugin-livereload
```

#### .config.mjs : mjs stands for module javascript file

#### for testing library setup : 

```bash
npm i --save-dev jest @testing-library/jest-dom @testing-library/react @types/jest jest-environment-jsdom
```

#### babel configuration for test files:
```bash
npm i --save-dev @babel/preset-env @babel/preset-react @babel/preset-typescript 
```
- package.json: 
```json
"babel": {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react",
      "@babel/preset-typescript"
    ]
  }
```

- npm test -- --detectOpenHandles : to detect open handles in jest test


#### storybook setup:
```bash
npx storybook@latest init
```
