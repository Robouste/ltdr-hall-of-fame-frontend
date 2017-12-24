import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../viewmodels/user.model';

@Pipe({
	name: 'roleFilter'
})

export class RoleFilterPipe implements PipeTransform {
	transform(users: User[], role: string = "disciple"): any {
		return users.filter(user => user.role === role);
	}
}
