module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '97e2206aeba84d8d4d877ce13f3edc13'),
  },
});
