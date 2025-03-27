import { Models } from 'appwrite';

export interface AppwriteResponse {
  total: number;
  documents: Models.Document[]; 
}