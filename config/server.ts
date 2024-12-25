export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1338),
  app: {
    keys: env.array('APP_KEYS'),
  },
  url: 'https://samaritana-blog.onrender.com',
  proxy: true,
  settings: {
    session: {
      secure: true,
      sameSite: 'lax',
    },
  },
});
