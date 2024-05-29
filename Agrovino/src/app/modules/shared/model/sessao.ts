import { Atividade } from "./atividade";

export interface Sessao {
  id: string;
  data: Date;
  descricao: string;
  status: boolean;
  bovinos: string[];
  atividades: Atividade[];
}
