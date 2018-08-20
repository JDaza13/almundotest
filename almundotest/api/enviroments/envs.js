const localEnv = require('./local');
const prodEnv = require('./prod');

const envObjs = [
  {
    name: 'local',
    env: localEnv
  },
  {
    name: 'prod',
    env: prodEnv
  }
];

exports.getEnvs = function () {
    return envObjs;
}
