import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('client')
@ApiTags('clients') 
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  @ApiOperation({ summary: 'Créer un nouveau client', description: 'Crée un nouveau client avec les données fournies' })
  @ApiBody({ description: 'Données du client à créer', type: CreateClientDto })
  @ApiResponse({ status: 201, description: 'Client créé avec succès' })
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientService.create(createClientDto);
  }

  @Get()
  @ApiOperation({ summary: 'Récupérer tous les clients', description: 'Récupère la liste de tous les clients enregistrés' })
  @ApiResponse({ status: 200, description: 'Liste de clients récupérée avec succès' })
  findAll(): string[]{
    return this.clientService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer un client par ID', description: 'Récupère un client en fonction de son identifiant' })
  @ApiParam({ name: 'id', description: 'Identifiant unique du client', example: '123' })
  @ApiResponse({ status: 200, description: 'Client récupéré avec succès' })
  @ApiResponse({ status: 404, description: 'Client non trouvé' })
  findOne(@Param('id') id: string) {
    return this.clientService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Mettre à jour un client', description: 'Met à jour les informations d\'un client existant' })
  @ApiParam({ name: 'id', description: 'Identifiant unique du client', example: '123' })
  @ApiBody({ description: 'Nouvelles données du client', type: UpdateClientDto })
  @ApiResponse({ status: 200, description: 'Client mis à jour avec succès' })
  @ApiResponse({ status: 404, description: 'Client non trouvé' })
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientService.update(+id, updateClientDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un client', description: 'Supprime un client en fonction de son identifiant' })
  @ApiParam({ name: 'id', description: 'Identifiant unique du client', example: '123' })
  @ApiResponse({ status: 200, description: 'Client supprimé avec succès' })
  @ApiResponse({ status: 404, description: 'Client non trouvé' })
  remove(@Param('id') id: string) {
    return this.clientService.remove(+id);
  }
}
