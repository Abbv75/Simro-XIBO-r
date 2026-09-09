const path = require('path');  // Import the 'path' module

module.exports = {
  // Redirige le dossier de sortie du build (paths.appBuild) vers "simroXibo".
  // C'est le point d'entrée correct : react-scripts s'en sert à la fois pour
  // webpack (output.path) ET pour la copie du dossier public/ (favicon,
  // logo, manifest.json, robots.txt), qui se fait hors-webpack et ignorerait
  // sinon un simple override de webpack.output.path (elle continuerait à
  // copier dans "build/").
  paths: (paths) => {
    paths.appBuild = path.resolve(__dirname, 'simroXibo');
    return paths;
  },
};
