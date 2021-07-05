export type ListaConteudosType = {
  id: number;
  icon: 'book' | 'warning' | 'dashboard' | 'cloudo' | 'tool' | 'medicinebox' | 'idcard';
  name: string;
};

export type Test = {
  type: string,
  quantity: number,
  questions: string[]
}

export type Alternative = {
  index: number,
  content: string
}

export type Question = {
  index: number,
  type: number,
  question: string,
  image: string,
  alternatives: Alternative[],
  answer: number
}
