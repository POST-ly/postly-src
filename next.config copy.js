// @ts-nocheck
require('dotenv').config();
const path = require('path');
const webpack = require('webpack');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  typescript: {
    ignoreDevErrors: true,
  },
  env: {
    reactStrictMode: true,
    SENTRY_DSN: process.env.SENTRY_DSN,
    SENTRY_ENV: process.env.ENV,
    ENV: process.env.ENV,
    INTERCOM_APP_ID:
      process.env.ENV === 'development' ? 's7vuq2ey' : 'mazvyvx7',
  },
  poweredByHeader: false,
  serverRuntimeConfig: {
    // Will be available only in server
    STRIPE_API_KEY: process.env.STRIPE_API_KEY,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AUTH0_CLIENTID: process.env.AUTH0_CLIENTID,
    AUTH0_REDIRECT: process.env.AUTH0_REDIRECT,
    HASURA_GRAPHQL_ENGINE_DOMAIN: process.env.HASURA_GRAPHQL_ENGINE_DOMAIN,
    STRIPE_PK_KEY: process.env.STRIPE_PK_KEY,
    CALENDLY_ONBOARDING_LINK: process.env.CALENDLY_ONBOARDING_LINK,
    GITSTART_HOOKS_URL: process.env.GITSTART_HOOKS_URL,
    ENV: process.env.ENV,
  },
  webpack: (config, { isServer, buildId }) => {
    config.resolve.alias['components'] = path.join(__dirname, 'src/components');
    config.resolve.alias['lib'] = path.join(__dirname, 'src/lib');
    config.resolve.alias['template'] = path.join(__dirname, 'src/template');
    config.resolve.alias['server'] = path.join(__dirname, 'src/server');

    // Sentry Setup
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.SENTRY_RELEASE': JSON.stringify(buildId),
      })
    );

    if (!isServer) {
      config.resolve.alias['@sentry/node'] = '@sentry/browser';
    }

    return config;
  },
});
