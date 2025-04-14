import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const executionsTable = sqliteTable('executions', {
  id: text({ length: 16 }).primaryKey(),
  args: text().notNull(),
  executedAt: int().notNull(),
  isExecuted: int().notNull(),
});
