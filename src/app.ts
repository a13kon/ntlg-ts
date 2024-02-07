class UserRepository implements IUserRepository {
    findAll(): Promise<User[]> {
        return new Promise<User[]>(resolve => {
            resolve([new User()]);
        });
    }
}

class User {

}

interface IUserRepository {
    findAll(): Promise<User[]>
}

class UserService {
    repository: IUserRepository;
    constructor(repository: IUserRepository) {
        this.repository = repository;
    }

    getAllUsers() {
        return this.repository.findAll();
    }
}

const rep = new UserRepository();
const user = new UserService(rep);
console.log(user.getAllUsers())

user.getAllUsers().then((res) => {
    console.log(res);
});