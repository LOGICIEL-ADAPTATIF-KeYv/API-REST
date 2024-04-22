import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';


@Controller('product')
@ApiTags('products') 
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiOperation({ summary: 'Créer un nouveau produit', description: 'Crée un nouveau produit avec les données fournies' })
  @ApiBody({ description: 'Données du produit à créer', type: CreateProductDto })
  @ApiResponse({ status: 201, description: 'Produit créé avec succès' })
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  @ApiOperation({ summary: 'Récupérer tous les produits', description: 'Récupère la liste de tous les produits enregistrés' })
  @ApiResponse({ status: 200, description: 'Liste de produits récupérée avec succès' })
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer un produit par ID', description: 'Récupère un produit en fonction de son identifiant' })
  @ApiParam({ name: 'id', description: 'Identifiant unique du produit', example: '123' })
  @ApiResponse({ status: 200, description: 'Produit récupéré avec succès' })
  @ApiResponse({ status: 404, description: 'Produit non trouvé' })
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Mettre à jour un produit', description: 'Met à jour les informations d\'un produit existant' })
  @ApiParam({ name: 'id', description: 'Identifiant unique du produit', example: '123' })
  @ApiBody({ description: 'Nouvelles données du produit', type: UpdateProductDto })
  @ApiResponse({ status: 200, description: 'Produit mis à jour avec succès' })
  @ApiResponse({ status: 404, description: 'Produit non trouvé' })
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un produit', description: 'Supprime un produit en fonction de son identifiant' })
  @ApiParam({ name: 'id', description: 'Identifiant unique du produit', example: '123' })
  @ApiResponse({ status: 200, description: 'Produit supprimé avec succès' })
  @ApiResponse({ status: 404, description: 'Produit non trouvé' })
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }
}
