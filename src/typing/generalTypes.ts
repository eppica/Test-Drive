export type ListaConteudosType = {
  id: number;
  icon: 'book' | 'warning' | 'dashboard' | 'cloudo' | 'tool' | 'medicinebox' | 'idcard';
  name: string;
};

export type test = {
  type: string,
  quantity: number,
  questions: string[]
}

export type alternative = {
  index: number,
  content: string
}

export type question = {
  index: number,
  type: number,
  question: string,
  image: string,
  alternatives: alternative[],
  answer: number
}
