class UserRepository {
    findAll() {
        // ...
        console.log('all users')
    }
}

class UserService {
    repository: UserRepository;
    constructor() {
        this.repository = new UserRepository();
    }

    getAllUsers() {
        return this.repository.findAll();
    }
}

const userServ = new UserService();
userServ.getAllUsers();
