export default () => ({
    'users-permissions': {
      config: {
        jwtSecret: process.env.JWT_SECRET || 'default-secret-key',
      },
    },
  });
  