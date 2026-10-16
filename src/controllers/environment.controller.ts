import { Request, Response } from 'express';

export class EnvironmentController {
  // Listar todos los espacios físicos y laboratorios
  static getEnvironments(req: Request, res: Response): void {
    res.status(200).json({
      status: 'success',
      message: 'Listado de ambientes y laboratorios obtenido',
      data: []
    });
  }

  // Crear un nuevo ambiente especificando capacidad y ubicación
  static createEnvironment(req: Request, res: Response): void {
    const { name, capacity, location } = req.body;
    res.status(201).json({
      status: 'success',
      message: 'Ambiente creado correctamente',
      data: { id: Date.now(), name, capacity, location }
    });
  }

  // Actualizar atributos específicos (capacidad, estado) vía PATCH
  static updateEnvironmentPartial(req: Request, res: Response): void {
    const { id } = req.params;
    const updates = req.body;
    res.status(200).json({
      status: 'success',
      message: `Ambiente ${id} actualizado parcialmente`,
      updatedFields: updates
    });
  }
}