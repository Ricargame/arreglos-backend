import { Test, TestingModule } from '@nestjs/testing';
import { PedidoController } from './pedido.controller.js';
import { PedidoService } from './pedido.service.js';

describe('PedidoController', () => {
  let controller: PedidoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PedidoController],
      providers: [PedidoService],
    }).compile();

    controller = module.get<PedidoController>(PedidoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
