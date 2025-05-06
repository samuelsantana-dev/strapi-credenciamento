export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: [
      "oacmK17yjUKOOAXEhbdg2Q==",
      "eeH/aLXPeH//luogMl3W+Q==",
      "9fnAzfV2jbJWc/BPllckew==",
      "PS6d84D2YbcztxQXJeKKhw=="
    ],
  },
});
