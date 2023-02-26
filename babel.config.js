'use strict';

module.exports = function (api) {
  api.cache(false);
  const presets = [
    'next/babel'
  ];

  const plugins = [
    ['@babel/plugin-proposal-decorators', { legacy: true }]
  ];

  return {
    presets,
    plugins
  };
};
