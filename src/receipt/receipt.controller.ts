import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReceiptService } from './receipt.service';
import { CreateReceiptDto } from './dto/create-receipt.dto';
import { UpdateReceiptDto } from './dto/update-receipt.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';


@Controller('receipt')
@ApiTags('receipts') 
export class ReceiptController {
  constructor(private readonly receiptService: ReceiptService) {}

  @Post()
  @ApiOperation({ summary: 'Créer une nouvelle facture', description: 'Crée une nouvelle facture avec les données fournies' })
  @ApiBody({ description: 'Données de la facture à créer', type: CreateReceiptDto })
  @ApiResponse({ status: 201, description: 'Facture créée avec succès' })
  create(@Body() createReceiptDto: CreateReceiptDto) {
    return this.receiptService.create(createReceiptDto);
  }

  @Get()
  @ApiOperation({ summary: 'Récupérer toutes les factures', description: 'Récupère la liste de toutes les factures enregistrées' })
  @ApiResponse({ status: 200, description: 'Liste de factures récupérée avec succès' })
  findAll() {
    return this.receiptService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer une facture par ID', description: 'Récupère une facture en fonction de son identifiant' })
  @ApiParam({ name: 'id', description: 'Identifiant unique de la facture', example: '123' })
  @ApiResponse({ status: 200, description: 'Facture récupérée avec succès' })
  @ApiResponse({ status: 404, description: 'Facture non trouvée' })
  findOne(@Param('id') id: string) {
    return this.receiptService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Mettre à jour une facture', description: 'Met à jour les informations d\'une facture existante' })
  @ApiParam({ name: 'id', description: 'Identifiant unique de la facture', example: '123' })
  @ApiBody({ description: 'Nouvelles données de la facture', type: UpdateReceiptDto })
  @ApiResponse({ status: 200, description: 'Facture mise à jour avec succès' })
  @ApiResponse({ status: 404, description: 'Facture non trouvée' })
  update(@Param('id') id: string, @Body() updateReceiptDto: UpdateReceiptDto) {
    return this.receiptService.update(+id, updateReceiptDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer une facture', description: 'Supprime une facture en fonction de son identifiant' })
  @ApiParam({ name: 'id', description: 'Identifiant unique de la facture', example: '123' })
  @ApiResponse({ status: 200, description: 'Facture supprimée avec succès' })
  @ApiResponse({ status: 404, description: 'Facture non trouvée' })
  remove(@Param('id') id: string) {
    return this.receiptService.remove(+id);
  }
}
