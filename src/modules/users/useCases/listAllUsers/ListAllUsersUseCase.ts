import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const loggedInUser = this.usersRepository.findById(user_id);

    if (!loggedInUser) {
      throw new Error("Logged in user does not exist!");
    }

    if (!loggedInUser.admin) {
      throw new Error("Logged in user is not admin!");
    }

    const allUsers = this.usersRepository.list();
    return allUsers;
  }
}

export { ListAllUsersUseCase };
