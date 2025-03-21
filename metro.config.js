const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { resolver: defaultResolver } = getDefaultConfig();

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */

const simulatorExts =
  process.env.SIMULATOR_MODE === 'enabled' ? ['simulator.tsx', 'simulator.ts', 'simulator.js'] : [];

const config = {
  resolver: {
    ...defaultResolver,
    sourceExts: [...simulatorExts, ...defaultResolver.sourceExts],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
