import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BASE_URL, ROLE} from "../../../environments/environment";
import {RoleModel} from "@models/role.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) {
  }

  getRoles(): Observable<{ roles: RoleModel[] }> {
    const API_URL = `${BASE_URL}${ROLE}`;
    return this.http.get<{ roles: RoleModel[] }>(API_URL, {responseType: 'json'});
  }
}
