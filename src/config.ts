import 'dotenv/config';

export const config = {
  databaseFileName: process.env.DB_FILE_NAME!,
} as const;
