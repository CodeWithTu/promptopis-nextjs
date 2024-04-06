// export default () => ({
//   nodeEnv: process.env.DB_TYPE || "dev",
//   port: parseInt(process.env.PORT, 10) || 3000,
//   dbType: process.env.DB_TYPE,
//   dbHost: process.env.DB_HOST,
//   dbPort: parseInt(process.env.DB_PORT, 10),
//   dbUserName: process.env.DB_USERNAME,
//   dbPassWord: process.env.DB_PASSWORD,
//   dbName: process.env.DB_NAME,
//   authSecret: process.env.AUTH_SECRET || "66f3cca610bad24b27857bbc4695dbeb",
//   privateKey: process.env.PRIVATE_KEY,
//   publicKey: process.env.PUBLIC_KEY,
//   secretKey: process.env.SECRET_KEY,
//   secretIV: process.env.SECRET_IV,
//   encryptMethod: process.env.ENCRYPT_METHOD || "aes256",
//   redisHost: process.env.REDIS_HOST || "10.0.1.10",
//   redisPort: parseInt(process.env.REDIS_PORT, 10) || 6379,
//   redisDB: parseInt(process.env.REDIS_DB, 2) || 3,
// });

const config = {
  googleId: process.env.GOOGLE_ID || "",
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
  mongoDbUri: process.env.MONGODB_URI || "",
};

export default config;
