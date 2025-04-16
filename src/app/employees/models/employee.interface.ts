import { Project } from "../../projects/models/projects.interface";
import { ParticipationProject } from '@shared/models/participation-project';

export interface Employee {
  id: string;
  fio: string;
  departmentId: string;
  mainInformation: string;
  education: string;
  grade: string;
  location: string;
  englishLevel: string;
  specialization: string;
  coverLetter: string;
  supervisor: string;
  project: Project;
  participationProject?: ParticipationProject;
};