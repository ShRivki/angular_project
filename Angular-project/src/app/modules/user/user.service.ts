import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
    private user: User = undefined;
    users: User[];
    constructor(private _http: HttpClient) {
        this.getUsersFromServer().subscribe(data => {
            this.users = data;
        })
    }

    getUsersFromServer(): Observable<User[]> {
        return this._http.get<User[]>("/api/Users")
    }
    getUserFromServer(id:number): Observable<User> {
        return this._http.get<User>(`/api/Users/${id}`)
    }
    getUser() {
        return this.user;
    }

    login(user: User): Observable<User> {
        return this._http.get<User>("/api/Users/0")
    }
    logOut() {
        this.user = undefined;
    }
    register(user: User): Observable<User> {

        var a = this._http.post<User>("/api/Students", user);
        this.getUsersFromServer().subscribe(data => {
            this.users = data;
        })
        return a
    }
    upDateUser(user: User): Observable<boolean> {
        var a= this._http.put<boolean>(`/api/user/${user.code}`, user);
        this.getUsersFromServer().subscribe(data => {
            this.users = data;
        })
        return a
    }

}