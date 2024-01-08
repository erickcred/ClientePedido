import { Cliente } from "./Cliente"
import { Produto } from "./Produto"

export class Pedido {
  id: number = 0
  numeroPrdido!: string
  dataEmissao!: string
  dataChegada!: string
  previsaoEntrega!: string
  clienteId!: number
  cliente!: Cliente
  produto!: Produto[]
  Finalizado: boolean = true
}
