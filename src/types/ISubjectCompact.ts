export interface ISubjectCompact {
  readonly id: string;
  type: 'compact';
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
