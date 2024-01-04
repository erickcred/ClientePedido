import { Endereco } from "./Endereco"
import { Telefone } from "./Telefone"

export enum TipoDocumento {
  CPF,
  CNPJ
}

export class Cliente {
  id: number = 0
  razaoSocial!: string
  documento!: string
  tipoDocumento!: TipoDocumento
  nomeContato!: string
  telefone!: Telefone
  endereco!: Endereco
}
