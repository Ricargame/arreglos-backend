import { Entity, Column } from 'typeorm';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn(
    'uuid', { name: 'id_pedido' }
    )
  idPedido: string

  @Column({
    name: 'id_cliente',
    type: 'uuid',
    length: 250,
    nullable: false,
  })
  idCliente: string
  
  @Column({
    type: 'decimal',
    length: length,
    nullable: false,
    default: 0,
  })
  precio: decimal
  
}


