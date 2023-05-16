import { IProperty } from './IProperty';

export interface ISubjectDetail {
	readonly id: string;
	code?: string;
	name: string;
	teachers: string[];
	categories: string[];
	classes: string[];
	updatedAt: number;
	grades: number[];
	semesters: string[];
	weeks: string[];
	places: string[];
	units?: number;
	properties: IProperty[];
}
