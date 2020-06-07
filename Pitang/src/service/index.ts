import axios from 'axios';
import { Alert } from 'react-native';

export const Service = axios.create({
  baseURL: 'https://desafio-mobile-pitang.herokuapp.com/movies',
});

class MovieService {
  async movies(page?: number = 0, size?: number = 9) {
    try {
      const { data } = await Service.get('/list', {
        params: { page, size },
      });
      return data;
    } catch (error) {
      // Alert.alert(JSON.stringify({ error }));
    }
  }

  async movieDetails(id: number) {
    try {
      const { data } = await Service.get(`/detail/${id}`);
      return data;
    } catch (error) {
      // Alert.alert(JSON.stringify({ error }));
    }
  }
}

export default new MovieService();
