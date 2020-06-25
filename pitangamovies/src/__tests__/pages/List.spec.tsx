import React from 'react';
import { render } from '@testing-library/react-native';
import MockAdapter from 'axios-mock-adapter';
import api from '../../services/api';

import List from '../../pages/List';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

// This sets the mock adapter on the default instance
const mock = new MockAdapter(api);

const movies = [
  {
    _id: '5d9e2b219aed8c0c42f775dd',
    name: 'Aladdin',
    url:
      'https://image.tmdb.org/t/p/w300_and_h450_bestv2/cYlzLYlhUXS0kW9T3ttAQ6fvZuV.jpg',
    __v: 0,
  },
  {
    _id: '5d9e50204aa94d85823838f0',
    name: 'Avatar',
    url:
      'https://media.fstatic.com/9Nj6GJcDtcgMG4FllePHuegogts=/fit-in/290x478/smart/media/movies/covers/2011/06/71fc1d0bb2bc1483e66941bb2f17d830.jpg',
    __v: 0,
  },
  {
    _id: '5d9e4ebc4aa94d85823838ee',
    name: 'Bacurau',
    url:
      'https://media.fstatic.com/yQz_oR8G5_y_OOCDHVesLVN3oyA=/fit-in/290x478/smart/media/movies/covers/2019/07/0636548.jpg-r_1920_1080-f_jpg-q_x-xxyxx.jpg',
    __v: 0,
  },
  {
    _id: '5d9e4f4e4aa94d85823838ef',
    name: 'Campo do Medo',
    url:
      'https://media.fstatic.com/tWzEK1v-V__5PEQdCeugAJv0bos=/fit-in/290x478/smart/media/movies/covers/2019/09/3348619.jpg-r_1920_1080-f_jpg-q_x-xxyxx.jpg',
    __v: 0,
  },
  {
    _id: '5d9e493f4aa94d85823838e9',
    name: 'Como Treinar o Seu Dragão 3',
    url:
      'https://image.tmdb.org/t/p/w600_and_h900_bestv2/5uqxMHM7YLKk6yni4bOE0D6DVz8.jpg',
    __v: 0,
  },
  {
    _id: '5d9e287e175b0704983cf44e',
    name: 'Coringa',
    url:
      'https://image.tmdb.org/t/p/w300_and_h450_bestv2/dJnXQL6Aa4s26eaORTvy0zRskfh.jpg',
    __v: 0,
  },
  {
    _id: '5d9e51f34aa94d85823838f4',
    name: 'Divertida Mente',
    url:
      'https://media.fstatic.com/5HrAbNc5NFhDGCJ_b-hCn_opjUU=/fit-in/290x478/smart/media/movies/covers/2014/10/do-avesso_t62633.jpg',
    __v: 0,
  },
  {
    _id: '5d9e51754aa94d85823838f2',
    name: 'Frozen: Uma Aventura Congelante',
    url:
      'https://media.fstatic.com/DNf-DhfPsyJ_LtoqPHjx7rttFEw=/fit-in/290x478/smart/media/movies/covers/2013/10/frozen-uma-aventura-congelante_t51482_5.jpg',
    __v: 0,
  },
  {
    _id: '5d9e49a54aa94d85823838eb',
    name: 'Godzilla II: Rei dos Monstros',
    url:
      'https://image.tmdb.org/t/p/w600_and_h900_bestv2/AdvjynNpKV47aY6tLgaZ1NIRWfW.jpg',
    __v: 0,
  },
  {
    _id: '5d9e49b14aa94d85823838ec',
    name: 'Godzilla II: Rei dos Monstros',
    url:
      'https://image.tmdb.org/t/p/w600_and_h900_bestv2/AdvjynNpKV47aY6tLgaZ1NIRWfW.jpg',
    __v: 0,
  },
  {
    _id: '5d9e28ae175b0704983cf44f',
    name: 'Homem-Aranha: Longe de Casa',
    url:
      'https://image.tmdb.org/t/p/w300_and_h450_bestv2/tX0o4AdHpidgniTWwfzK0dNTKrc.jpg',
    __v: 0,
  },
  {
    _id: '5d9e28df175b0704983cf450',
    name: 'It: Capítulo Dois',
    url:
      'https://image.tmdb.org/t/p/w300_and_h450_bestv2/hufyXxsAqgWvWZp2lq2wZPsS4sf.jpg',
    __v: 0,
  },
];

describe('List Page', () => {
  it('should be able to render list page', () => {
    const { getByText } = render(<List />);

    expect(getByText('Bem vindo ao Pitang Movies')).toBeTruthy();
  });

  it('should be able to list movies', async () => {
    mock.onGet('/list', { params: { page: 0, size: 12 } }).reply(200, movies);

    const response = await api.get('/list', { params: { page: 0, size: 12 } });

    expect(response.data.length).toEqual(12);
  });

  it('should not be able to list movies', async () => {
    mock.onGet('/list', { params: { page: 0, size: 12 } }).reply(200, []);

    const response = await api.get('/list', { params: { page: 0, size: 12 } });

    expect(response.data).toHaveLength(0);
  });
});
