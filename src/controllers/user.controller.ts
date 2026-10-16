import { Request, Response } from 'express';

export class UserController {
  // Obtener listado completo de usuarios
  static getUsers(req: Request, res: Response): void {
    res.status(200).json({
      status: 'success',
      message: 'Listado completo de usuarios obtenido',
      data: []
    });
  }

  // Registrar un nuevo perfil (estudiante, docente, administrador)
  static createUser(req: Request, res: Response): void {
    const { name, email, role } = req.body;
    res.status(201).json({
      status: 'success',
      message: 'Usuario registrado exitosamente',
      data: { id: Date.now(), name, email, role }
    });
  }

  // Consultar detalles por ID único
  static getUserById(req: Request, res: Response): void {
    const { id } = req.params;
    res.status(200).json({
      status: 'success',
      message: `Detalles del usuario ${id}`,
      data: { id, name: 'Usuario Ejemplo', role: 'estudiante' }
    });
  }

  // Actualizar parcialmente (rol, estado o contraseña) usando PATCH
  static updateUserPartial(req: Request, res: Response): void {
    const { id } = req.params;
    const updates = req.body;
    res.status(200).json({
      status: 'success',
      message: `Usuario ${id} actualizado parcialmente`,
      updatedFields: updates
    });
  }

  // Eliminar lógicamente un usuario
  static deleteUser(req: Request, res: Response): void {
    const { id } = req.params;
    res.status(200).json({
      status: 'success',
      message: `Usuario ${id} eliminado lógicamente (desactivado)`
    });
  }
}