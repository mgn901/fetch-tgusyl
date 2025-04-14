CREATE TABLE `executions` (
	`id` text(16) PRIMARY KEY NOT NULL,
	`args` text NOT NULL,
	`executedAt` integer NOT NULL,
	`isExecuted` integer NOT NULL
);
