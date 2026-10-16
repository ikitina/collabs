import { Request, Response } from 'express';

export class DashboardController {
  // Obtener resumen consolidado con contadores globales para las tarjetas del panel
  static getDashboardSummary(req: Request, res: Response): void {
    res.status(200).json({
      status: 'success',
      message: 'Resumen consolidado del panel obtenido correctamente',
      data: {
        totalUsers: 120,
        activeEnvironments: 15,
        operationalEquipment: 340,
        unresolvedCriticalIncidents: 4
      }
    });
  }
}