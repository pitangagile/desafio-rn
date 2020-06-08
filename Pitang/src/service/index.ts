import axios from 'axios';
import { StatusBar } from 'react-native';

export const Service = axios.create({
  baseURL: 'https://desafio-mobile-pitang.herokuapp.com/movies',
});

class MovieService {
  async movies(page?: number, size?: number) {
    StatusBar.setNetworkActivityIndicatorVisible(true);

    const { data } = await Service.get('/list', {
      params: { page, size },
    });

    StatusBar.setNetworkActivityIndicatorVisible(false);

    return data;
  }

  async movieDetails(id: number) {
    StatusBar.setNetworkActivityIndicatorVisible(true);

    const { data } = await Service.get(`/detail/${id}`);

    StatusBar.setNetworkActivityIndicatorVisible(false);

    return data;
  }
}

export default new MovieService();
