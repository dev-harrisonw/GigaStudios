/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_URL || "https://www.gigastudios.co.uk/",
  generateRobotsTxt: true, // (optional)
  priority: 0.7,
  exclude: ["/coming-soon"],
  // ...other options
};
