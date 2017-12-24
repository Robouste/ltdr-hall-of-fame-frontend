import { User } from './user.model';

export class AuthResponse {
	expiresAt: string;
	token: string;
	user: User;
}
