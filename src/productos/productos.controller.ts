import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CrearProductoDTO } from './DTO/CrearProductoDTO';
import { ActualizarProductoDTO } from './DTO/ActualizarProductoDTS';

@Controller('productos')
export class ProductosController {

    
    constructor(        private readonly productosService: ProductosService ) {} 
    
    @Get()
    getAllProductos(){
        return this.productosService.findAll();        
    }

    @Get(":id")
    getProductosById(@Param("id") id:String){

        return this.productosService.findById(+id);
    }

    @Post()
    crearProducto(@Body() crearDTO:CrearProductoDTO){

        return this.productosService.create(crearDTO);
    }

    @Patch(":id")
    actualizarProducto(
        @Param("id") id:String, 
        @Body() updateDTO:ActualizarProductoDTO){
            return this.productosService.update(+id,updateDTO);
        }
    @Delete(":id")
    eliminarProducto(@Param("id") id:String){

        return this.productosService.delete(+id);
    }
}

    


    
    



