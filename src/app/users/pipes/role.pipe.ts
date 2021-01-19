import {Pipe, PipeTransform} from '@angular/core';
import {RoleModel} from "@models/role.model";

@Pipe({
  name: 'role'
})
export class RolePipe implements PipeTransform {

  transform(roleId: number, roleList: RoleModel[]): string {
    const rol = roleList.find(({id}) => roleId === id);
    return rol ? rol.label : 'Un know';
  }

}
