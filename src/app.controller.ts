import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Renvoit les modèles de données', description: 'Récupère la liste en JSON de chaque modèle avec leurs paramètres et relations' })
  @ApiResponse({ status: 200, description: 'Liste de modèles récupérée avec succès' })
  getDataModel(): string {
    return this.appService.getDataModel();
  }
}
