export interface Project {
  id: string;
  name: string;
  name_nda: string;
  description: string;
  direction: string;
  goal: string;
  functionality: string;
  customer: string;
};

export type Projects = Pick<Project, 'id' | 'name'>