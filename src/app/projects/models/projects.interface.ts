export interface Project {
  id: string;
  label: string;
  label_nda: string;
  description: string;
  direction: string;
  goal: string;
  functionality: string;
  customer: string;
};

export type Projects = Pick<Project, 'id' | 'label'>