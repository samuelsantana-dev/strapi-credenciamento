export default ({ env }) => ({
  auth: {
    secret: 'olxNvX/904Ev2Imt1+2Suw==',
  },
  apiToken: {
    salt: 'hDZ50c/oFCvNUGQv8KO4Xw==',
  },
  transfer: {
    token: {
      salt: 'Un5VpyqbqcX/5jZlmyhJyQ==',
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
