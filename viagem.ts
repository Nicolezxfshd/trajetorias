export interface Viagem {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  destino: string;
  duracao: string;
  categoria: string;
  detalhes: {
    inclusos: string[];
    naoInclusos: string[];
    roteiro: string[];
  };
}
