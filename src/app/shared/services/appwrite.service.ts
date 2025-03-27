import { Injectable } from '@angular/core';
import { Client, Account, Databases } from 'appwrite';
import { environment } from '@environment/environment';
import { APPWRITE_PROJECT_ID } from '@shared/constants';

@Injectable({
  providedIn: 'root'
})

export class AppwriteService {
  client: Client = new Client()
    .setEndpoint(environment.apiUrl)
    .setProject(APPWRITE_PROJECT_ID);

  account: Account = new Account(this.client);
  db: Databases = new Databases(this.client);
}