import { User } from "../../domain/models/User";
import { UserService } from "../../domain/services/UserService";

export class GetUserByEmailUseCase {
    constructor(private readonly userService: UserService) {}

    async execute(email: string, password: string): Promise<User | null> {
        try {
            const user = await this.userService.getUserByEmail(email, password);
            if (!user) {
                throw new Error("Usuario No Encontrado");
            }

            // Verifica la contraseña
            const isPasswordValid = await this.userService.comparePassword(password, user.password);
            if (!isPasswordValid) {
                throw new Error("Contraseña Incorrecta");
            }

            return user;
        } catch (error) {
            return null;
        }
    }
}