import { Pedido } from "./Pedido"

export class Produto {
  id: number = 0
  nome!: string
  quantidade!: number
  cor: string = ''
  descricao!: string
  valorUni!: number
  ativo: boolean = true
  pedidoId: number = 0
  pedido!: Pedido
}


