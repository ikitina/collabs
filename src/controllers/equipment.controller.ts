import { Request, Response } from 'express';

export class EquipmentController {
  // Registrar un nuevo equipo vinculado a un ambiente
  static createEquipment(req: Request, res: Response): void {
    const { serialNumber, name, environmentId } = req.body;
    res.status(201).json({
      status: 'success',
      message: 'Equipo vinculado y registrado correctamente',
      data: { id: Date.now(), serialNumber, name, environmentId }
    });
  }

  // Listar todos los equipos o filtrar por ambiente (mediante req.query)
  static getEquipment(req: Request, res: Response): void {
    const { environmentId } = req.query;
    res.status(200).json({
      status: 'success',
      message: environmentId 
        ? `Listado de equipos del ambiente ${environmentId}`
        : 'Listado de todos los equipos registrados',
      data: []
    });
  }

  // Actualizar de forma parcial el estado técnico o ubicación vía PATCH
  static updateEquipmentPartial(req: Request, res: Response): void {
    const { id } = req.params;
    const updates = req.body;
    res.status(200).json({
      status: 'success',
      message: `Estado o ubicación del equipo ${id} actualizado`,
      updatedFields: updates
    });
  }
}