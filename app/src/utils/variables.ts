import { ListaConteudosType } from '../typing/generalTypes';

export const URIBase: string = 'https://test-drive-api.netlify.app/.netlify/functions/api/';

export const ListaConteudos: Array<ListaConteudosType> = [
  {
    id: 1,
    icon: 'book',
    name: 'Legislação',
    route: 'legislacao',
  },
  {
    id: 2,
    icon: 'warning',
    name: 'Sinalização',
    route: 'sinalizacao',
  },
  {
    id: 3,
    icon: 'dashboard',
    name: 'Direção Defensiva',
    route: 'direcao-defensiva',
  },
  {
    id: 4,
    icon: 'cloudo',
    name: 'Meio Ambiente',
    route: 'meio-ambiente',
  },
  {
    id: 5,
    icon: 'tool',
    name: 'Mecânica Básica',
    route: 'mecanica-basica',
  },
  {
    id: 6,
    icon: 'medicinebox',
    name: 'Primeiros Socorros',
    route: 'primeiros-socorros',
  },
  {
    id: 7,
    icon: 'idcard',
    name: 'Simulado',
    route: 'simulado',
  },
];
