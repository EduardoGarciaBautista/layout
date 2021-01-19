import {Pipe, PipeTransform} from '@angular/core';
import {UserModel} from "@models/user.model";
import {FilterModel} from "@models/filter.model";

@Pipe({
    name: 'filtersPipe'
})
export class FiltersPipe implements PipeTransform {

    transform(userList: UserModel[], filters: FilterModel): UserModel[] {

        if (filters.alphabet) {

            if (filters.alphabet.value === 0) {
                return userList.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1;
                    } else if (a.name < b.name) {
                        return -1;
                    } else {
                        return 0;
                    }
                })
            } else {
                return userList.sort((a, b) => {
                    if (a.name < b.name) {
                        return 1;
                    } else if (a.name > b.name) {
                        return -1;
                    } else {
                        return 0;
                    }
                })
            }


        }

        if (filters.type) {
            return userList;
        }
        if (filters.query) {
            return userList.filter(user => user.name.toLocaleLowerCase().includes(filters.query.toLocaleLowerCase())
                || user.email.toLocaleLowerCase().includes(filters.query.toLocaleLowerCase()));
        }

        if (filters.page) {
            if (filters.page.value > userList.length) {
                return userList;
            }

            if (filters.page.actualPage) {
                return userList.slice(filters.page.value * (filters.page.actualPage -1), (filters.page.value * filters.page.actualPage))
            } else {
                return userList.slice(0, filters.page.value)
            }

        }
        return userList;
    }

}
