import { Cliente } from "./Cliente"
import { Produto } from "./Produto"

export class Pedido {
  id: number = 0
  numeroPrdido!: string
  dataEmissao!: Date
  dataChegada!: Date
  precisaoEntrega!: Date
  cliente!: Cliente
  produto!: Produto[]
}
