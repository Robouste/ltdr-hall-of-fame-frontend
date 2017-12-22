import { Component, OnInit } from '@angular/core';
import { User } from '../viewmodels/user.model';
import { UserService } from '../services/user.service';
import { Joke } from '../viewmodels/joke.model';

@Component({
	selector: 'app-add-joke-dialog',
	templateUrl: 'add-joke-dialog.component.html',
	styleUrls: ['./add-joke-dialog.component.scss']
})

export class AddJokeDialogComponent implements OnInit {

	public users: Array<User> = [];
	public joke: Joke = new Joke();

	constructor(private userService: UserService) { }

	ngOnInit() {
		this.userService.list()
			.subscribe((result) => {
				this.users = result;
			});
	}
}
