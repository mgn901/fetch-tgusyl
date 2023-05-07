export interface ISubjectCompact {
	readonly id: string;
	code?: string;
	name: string;
	grades: number[];
	classes: string[];
	weeks: string[];
	semesters: string[];
	places: string[];
	teachers: string[];
	updatedAt: number;
}
