/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://chicakitchen.com',
    generateRobotsTxt: true, // (optional)
    exclude: ['/api/*'],
}