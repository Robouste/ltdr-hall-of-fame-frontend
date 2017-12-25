import { User } from './user.model';
export class Vote {
	userId: number;
	user: User;
	jokeId: number;
	voteState: number;
}
