# 80-20 Guide to Angular

## Anatomy of an Angular App

### Key Angular Project Files

- tslint.json (rules to enforce code quality)
- tsconfig.json (3 files created by angular; don't modify)
- package.json (modified by NPM; scripts to be run)
- karma.conf.js (karma test configuration)
- angular.json 
  - IMPORTANT but not generally modified; 
  - controls how behaviour of Angular CLI;
  - certain use cases may require customization such as assets, styles, scripts
- .gitignore (setup by angular automatically)
- node_modules (don't modify; overwritten)
- e2e (end-to-end tests; )
- dist (overwritten every time `ng serve` or `ng build` is run)
  - contains all the code and assets that will be deployed to production environment
  - don't modify directly because if gets overwritten

- src (this is where we do all our work)
  - main.ts (where Angular bootstraps App; generally nothing to modify)
  - index.html (`<app-root>`) is where Angular puts our App; generally nothing to modify but you may at times add **scripts**, **style** or **meta** references for example **google fonts**
  - styles.scss (style file using **scss** preprocessor by default; you can import styles at the the top of this file instead of in **index.html** using `@import()`)
  - environments folder
    - environment.ts (dev environment settings) 
    - environment.prod.ts (production environment settings) 
    - allows you to manage settings that may be different between dev and prod such as environment keys and debug flags.
  - assets folder
    - static assets such as images that will be copied to **dist** folder and deployed with our app. (copied over as raw files)
  - **app** folder (this is where almost all our work will be focused in building an app)