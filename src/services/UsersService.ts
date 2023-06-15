import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository,";

class UsersService {
  async create(email: string) {
    // Verificar se o usuario existe

    const usersRepository = getCustomRepository(UsersRepository);

    const userExists = await usersRepository.findOne({
      email,
    });

    // Se existir, retornar o usuario
    if (userExists) {
      return userExists;
    }

    // Se nao existir, salvar no banco de dados
    const user = usersRepository.create({ email });

    await usersRepository.save(user);

    return user;
  }
}

export { UsersService };
