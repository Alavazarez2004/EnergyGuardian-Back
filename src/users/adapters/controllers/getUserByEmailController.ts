import { GetUserByEmailUseCase } from "../../application/use-cases/getUserByEmailUseCase";
import { Request, Response } from "express";

export class GetUserByEmailController {
    constructor(private getUserByEmailUseCase: GetUserByEmailUseCase) {}
    
    async handle(req: Request, res: Response) {
        try {
            const { email, password } = req.body; // Obtener email y password del cuerpo de la solicitud
            if (!email || !password) {
                return res.status(400).json({ message: "Correo y Contraseña requeridos" });
            }

            const user = await this.getUserByEmailUseCase.execute(email, password);
            if (user) {
                return res.status(200).json(user);
            } else {
                return res.status(401).json({ message: "Correo o Contraseña invalido" });
            }
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }
}
