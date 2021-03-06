const path = require('path');
const jest = require('jest');

module.exports.coverage = async ({ packagePath }) => {
  process.env.NODE_ENV = 'test';

  // eslint-disable-next-line
  const packageJson = require(path.join(packagePath, 'package.json'));
  const createConfig = require('./jest/create');
  const config = {
    ...createConfig({ packagePath }),
    ...(packageJson.jest ? packageJson.jest : {})
  };

  await jest.run(['--config', JSON.stringify(config), '--coverage', '--ci', '--passWithNoTests']);
};

module.exports.watch = async ({ packagePath }) => {
  process.env.NODE_ENV = 'test';

  // eslint-disable-next-line
  const packageJson = require(path.join(packagePath, 'package.json'));
  const createConfig = require('./jest/create');
  const config = {
    ...createConfig({ packagePath }),
    ...(packageJson.jest ? packageJson.jest : {})
  };

  await jest.run(['--config', JSON.stringify(config), '--watch']);
};
