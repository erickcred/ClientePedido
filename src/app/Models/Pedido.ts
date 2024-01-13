import { Cliente } from "./Cliente"
import { Produto } from "./Produto"

export class Pedido {
  id: number = 0
  numeroPedido: string | undefined
  dataEmissao!: string
  dataChegada!: string
  previsaoEntrega!: string
  clienteId: number | undefined
  cliente!: Cliente
  produto!: Produto[]
  Finalizado: boolean = true
}
