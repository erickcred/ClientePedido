import { Cliente } from "./Cliente"

export class Telefone {
  id!: number
  numero!: string
  descricao!: string
  usuarioId!: number
  usuario!: Cliente
}
