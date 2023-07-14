import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../shared/models/users';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { USER_LOGIN_URL } from '../shared/environment/urls';
import { ToastrService } from 'ngx-toastr';
// import { ToastrService } from 'ngx-toastr/toastr/toastr.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(new User());
  public userObservable: Observable<User>;
  constructor(
    private httpClient: HttpClient,
    private toastrService: ToastrService
  ) {
    this.userObservable = this.userSubject.asObservable();
  }

  login(userLogin: IUserLogin):Observable<User> {
    return this.httpClient.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) => {
          this.toastrService.success(
            `Welcome to Foodie Palace ${user.name}`,
            'Login Sucessfully!'
          );
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, 'Login Failed!');
        },
      })
    );
  }
}
