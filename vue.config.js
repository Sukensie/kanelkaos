module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/' // Use '/' for custom domain, '/repository-name/' for github.io subdomain
    : '/'
}