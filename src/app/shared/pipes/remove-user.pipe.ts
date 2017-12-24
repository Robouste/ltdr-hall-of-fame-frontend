import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../viewmodels/user.model';

@Pipe({
	name: 'removeUser'
})

export class RemoveUserPipe implements PipeTransform {
	transform(users: User[], userId: number): any {
		return users.filter(user => user.id !== userId);
	}
}
