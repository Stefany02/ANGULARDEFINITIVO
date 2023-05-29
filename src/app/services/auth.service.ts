import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
 authURL = 'https://stefany-backend22.onrender.com';
  adminUser: any;

  constructor(private userServ: UserService) {
    this.getAdmin();
  }

  getAdmin(): void {
    this.userServ.getById(1).subscribe((data) => {
      this.adminUser = data;
    });
  }

  authenticate(credentials: User): boolean {
    const verifiedUser =
      credentials.email == this.adminUser.email &&
      credentials.password == this.adminUser.password;
    if (verifiedUser) {
      localStorage.setItem('loggedUser', 'true');
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem('loggedUser');
  }
}