import database from '../database/connection';

class IsUserCreated {
    async execute(userEmail) {
        const [user] = await database('users')
            .select('*')
            .where('email', '=', userEmail);

        if (!user) {
            return false;
        }

        delete user.password;

        return user;
    }
}

export default new IsUserCreated(); 