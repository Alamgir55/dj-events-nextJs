module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '16bde130cc0fa785f2d6cacfb0903c8c'),
  },
});
