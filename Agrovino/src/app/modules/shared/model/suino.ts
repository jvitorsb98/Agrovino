export interface Suino {
  brinco: string | undefined;
  brinco_pai: string;
  brinco_mae: string;
  dt_nasc: string;
  dt_saida: string;
  status: string;
  sexo: string;
  pesos: { peso: string; dt_pesagem: string; }[];
}

export interface SuinoPesos {
  peso: number;
  dt_pesagem: string;
  brinco_suino: string;
}
