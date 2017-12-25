import { Component, OnInit } from '@angular/core';
import { User } from '../viewmodels/user.model';

@Component({
	selector: 'app-add-user-dialog',
	templateUrl: 'add-user-dialog.component.html',
	styleUrls: ['./add-user-dialog.component.scss']
})

export class AddUserDialogComponent implements OnInit {

	public user: User = new User();

	constructor() { }

	ngOnInit() { }
}
