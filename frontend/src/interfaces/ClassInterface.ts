export interface Class {
  ano: number;
  semestre: number;
  numero: number;
  horario: [string];
  professor: {
    nome: string;
  };
  professorName: string;
  aula: [string];
  disciplina: string;
  sala: string;
  alunos: [string];
  _id: string;
};