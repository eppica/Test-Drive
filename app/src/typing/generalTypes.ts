export type ListaConteudosType = {
  id: number;
  icon: 'book' | 'warning' | 'dashboard' | 'cloudo' | 'tool' | 'medicinebox' | 'idcard';
  name: string;
  route: 'legislacao' |
  'sinalizacao' |
  'direcao-defensiva' |
  'meio-ambiente' |
  'mecanica-basica' |
  'primeiros-socorros' |
  'simulado'
};

export type Test = {
  type: string,
  quantity: number,
  questions: Question[],
  isReview: boolean,
  duration: number,
  remainingTime?: number
}

export type Alternative = {
  id: number,
  text: string
}

export type Question = {
  index: number,
  type: number,
  question: string,
  image: string,
  alternatives: Alternative[],
  answer: number
  userAnswer?: number
}

export type Statistic = {
  date: Date,
  type: string,
  percentage: number
}

export type Response = {
    "__v": number,
    "_id": string,
    "alternatives": [
      {
        "_id": string,
        "id": number,
        "text": string,
      },
    ],
    "image": string,
    "answer_id": number,
    "content": string,
    "id": number,
    "question": string,
    "type": number,
  
}
