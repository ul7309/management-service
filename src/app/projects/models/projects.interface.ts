export interface Project {
  id: string;
  label: string;
};

export interface SimpleProject extends Project {
  label_nda: string;
  description: string;
  direction: string;
  goal: string;
  functionality: string;
  сustomer: string;
};