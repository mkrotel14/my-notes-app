import axios from 'axios';
import {IRequestAddNote, IResponseCategory, IResponseNote} from './types';

const api = axios.create({
  baseURL: 'http://192.168.0.178:3000/todo',
  headers: {
    'Access-Control-Allow-Credentials': '*',
    crossorigin: true,
  },
});

export const getNotesByCategory = async (
  category: number,
): Promise<IResponseNote[]> => {
  let data: IResponseNote[];
  const response = await api.get(`/category/${category}`);

  data = response.data;
  return data;
};

export const getCategories = async (): Promise<IResponseCategory[]> => {
  let data: IResponseCategory[];
  const response = await api.get('/count');

  data = response.data;
  return data;
};

export const addNewNote = async (
  data: IRequestAddNote,
): Promise<IResponseNote> => {
  return await api.post('/create', data);
};

export const updateNote = async (id: number, data: IRequestAddNote) => {
  return await api.patch(`/${id}`, {data});
};

export const deleteNote = async (id: number) => {
  return await api.delete(`/${id}`);
};
