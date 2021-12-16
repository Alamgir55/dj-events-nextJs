module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '486d5769d21772c56d9423558d60a728'),
  },
});
