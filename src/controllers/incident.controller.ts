import { Request, Response } from 'express';

export class IncidentController {
  // Crear un reporte de novedad asociándolo a un equipo o ambiente específico
  static createIncident(req: Request, res: Response): void {
    const { title, description, equipmentId, environmentId } = req.body;
    res.status(201).json({
      status: 'success',
      message: 'Reporte de novedad creado exitosamente',
      data: { id: Date.now(), title, description, equipmentId, environmentId, status: 'pendiente' }
    });
  }

  // Consultar el historial completo de incidencias reportadas
  static getIncidents(req: Request, res: Response): void {
    res.status(200).json({
      status: 'success',
      message: 'Historial completo de incidencias obtenido',
      data: []
    });
  }

  // Actualizar parcialmente el estado de una novedad (ej. "pendiente" a "en proceso" o "resuelto") mediante PATCH
  static updateIncidentStatus(req: Request, res: Response): void {
    const { id } = req.params;
    const { status } = req.body; // e.g., 'en proceso', 'resuelto'
    res.status(200).json({
      status: 'success',
      message: `Estado de la novedad ${id} actualizado a '${status}'`,
      updatedFields: { status }
    });
  }
}