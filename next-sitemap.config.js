/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://heartlabai.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: [
    '/server-sitemap.xml'
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/'
      }
    ],
    additionalSitemaps: [
      'https://heartlabai.com/server-sitemap.xml'
    ]
  }
};