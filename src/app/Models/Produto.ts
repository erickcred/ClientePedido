import { Cliente } from "./Cliente"

export class Produto {
  id: number = 0
  numeroPedido!: string
  nome!: string
  tamanho!: string
  cor: string = ''
  quantidade!: number
  valorUni!: number
  cliente!: Cliente
  dataChegada!: Date
  dataPrevistaEntrega!: Date
  descricao!: string
}


