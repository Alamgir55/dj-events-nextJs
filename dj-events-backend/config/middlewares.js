module.exports = [
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::favicon",
  "strapi::public",
];

// module.exports = [
//   // ...
//   {
//     name: "strapi::security",
//     config: {
//       contentSecurityPolicy: {
//         useDefaults: true,
//         directives: {
//           "connect-src": ["'self'", "https:"],
//           "img-src": ["'self'", "data:", "blob:", "res.cloudinary.com"],
//           "media-src": ["'self'", "data:", "blob:", "res.cloudinary.com"],
//           upgradeInsecureRequests: null,
//         },
//       },
//     },
//   },
//   "strapi::errors",
//   "strapi::security",
//   "strapi::cors",
//   "strapi::poweredBy",
//   "strapi::logger",
//   "strapi::query",
//   "strapi::body",
//   "strapi::favicon",
//   "strapi::public",
// ];
