import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'orderBy'
})

export class OrderByPipe implements PipeTransform {
	transform(value: any[], property: any): any {
		return value.sort((a, b) => {
			if (typeof a[property] === "number") {
				return (a[property] - b[property]);
			}
			else {
				return ((a[property] < b[property]) ? -1 : ((a[property] > b[property]) ? 1 : 0));
			}
		});
	}
}
