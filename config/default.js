/**
 * The configuration file.
 */

module.exports = {
  REDIS_URL: process.env.REDIS_URL || 'redis://h:pd187cb7e47bec6ca02353b2f7843d4cc726f789765a7c6caeb5f72112895ec15@ec2-34-206-56-227.compute-1.amazonaws.com:39769',
  NODE_ENV: process.env.NODE_ENV || 'development',
  SECRETS: process.env.SECRETS || 'sf-explorer-secret',
  OAUTH_APP_KEY: process.env.OAUTH_APP_KEY || '3MVG9d8..z.hDcPLv4nchV.jQQ4U2IEJeV7drRd5_rPWy9TDaDNWYPoM5ZfqU2vPVU74dqNHedKLf_cXJxP89',
  OAUTH_APP_SECERET: process.env.OAUTH_APP_SECERET || '6329088059080434840',
  OAUTH_APP_CALLBACK: process.env.OAUTH_APP_CALLBACK || 'https://localhost:3000/api/auth/callback',
  SF_SCOPE: process.env.SF_SCOPE || 'api id web',
  PORT: process.env.PORT || '3000',
  ENABLE_TUNNEL : process.env.ENABLE_TUNNEL || true,
  JWT_SECRET: process.env.JWT_SECRET || 'secret',
};
