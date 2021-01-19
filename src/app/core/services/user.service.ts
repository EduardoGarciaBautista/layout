import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BASE_URL, USERS} from "../../../environments/environment";
import {UserModel} from "@models/user.model";
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private _userList: UserModel[] = [];

    private behaviorObj = new BehaviorSubject<UserModel[]>([]);

    userListener$ = this.behaviorObj.asObservable();

    constructor(private http: HttpClient) {
    }

    getUsers(): void {
        const API_URL = `${BASE_URL}${USERS}`;
        try {
            this.http.get<{ users: UserModel[] }>(API_URL, {responseType: 'json'})
                .subscribe(({users}) => {
                    this._userList = users;
                    this.behaviorObj.next(users);
                });
        } catch (e) {
            console.log('Error al obtener los datos', e);
        }
    }

    get userList(): UserModel[] {
        return this._userList;
    }

    deleteUser(userEmail: string): void {
        this._userList = this._userList.filter(({email}) => email !== userEmail);
        this.behaviorObj.next(this._userList);
    }

    changeStatus(userEmail: string, value: boolean): void {
        this._userList = this._userList.map(user => user.email === userEmail ? {...user, active: value} : {...user});
        this.behaviorObj.next(this._userList);
    }

    editUser(userEdited: UserModel) {
        this._userList = this._userList.map(user => user.email === userEdited.email ? {...userEdited} : {...user});
        this.behaviorObj.next(this._userList);
    }

    createUser(newUser: UserModel) {
        this._userList = [newUser, ...this._userList]
        this.behaviorObj.next(this._userList);
    }

}
