module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '665ce9f8d070b1192c8cdb3e00a0fbdb'),
  },
});
