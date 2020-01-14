# Préparer les dépendances & packages

- `cd projet-ofoot/o-foot`

## Ajouter Webpack Encore
- `composer require symfony/webpack-encore-bundle`
- `yarn install`

## Ajouter React.js & SASS
- `yarn add @babel/preset-react --dev`
- `yarn add react react-dom prop-types axios`
- `yarn add sass-loader@^7.0.1 node-sass --dev`
- `nano webpack.config.js`
Chercher la ligne où se trouve `.enableSassLoader()` et la "décommenter".
Chercher la ligne où se trouve `.enableReactPreset()` et la "décommenter".

# Utiliser Webpack Encore
- Initialisation des dépendances :
  - `composer install`
  - `yarn install`

- Environnement de dev avec auto-reload lors d'un changement de fichier :
  - `yarn encore dev --watch`

- Environnement de production :
  - `yarn encore production`