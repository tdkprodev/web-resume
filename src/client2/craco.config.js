const { paths } = require('@craco/craco');

console.log('paths', paths);

module.exports = {
  webpack: {
    alias: {
      // Add the aliases for all the top-level folders
      '@client/*': `${paths.appSrc}/src/client2/*`,
      '@src/*': `${paths.appSrc}/src/client2/src/*`,
      '@images/*': `${paths.appSrc}/src/client2/src/images/*`,
      '@modules/*': `${paths.appSrc}/src/client2/src/modules/*`,
      '@components/*': `${paths.appSrc}/src/client2/src/components/*`,
      '@utils/*': `${paths.appSrc}/src/client2/src/utils/*`,
      '@server/*': `${paths.appSrc}/src/server/*`,
      '@shared/*': `${paths.appSrc}/src/shared/*`,
      '@connection/*': `${paths.appSrc}/src/shared/connection/*`,
      '@interface/*': `${paths.appSrc}/src/shared/interface/*`,
    },
  },
};
