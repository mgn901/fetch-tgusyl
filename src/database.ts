import { drizzle } from 'drizzle-orm/libsql';
import { config } from './config.ts';

export const database = drizzle(config.databaseFileName);
