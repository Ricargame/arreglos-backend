import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PedidoModule } from './pedido/pedido.module.js';

@Module({
  imports: [PedidoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
