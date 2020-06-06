import axios from 'axios';
import { Alert } from 'react-native';

const Service = axios.create({
  baseURL: 'https://desafio-mobile-pitang.herokuapp.com/movies',
});

class MovieService {
  async movies(page?: number, size?: number) {
    try {
      const { data } = await Service.get('/list', {
        params: { page, size },
      });
      return data;
    } catch (error) {
      Alert.alert(JSON.stringify({ error }));
    }
  }

  async movieDetails(id: number) {
    try {
      const { data } = await Service.get(`/detail/${id}`);
      return data;
    } catch (error) {
      Alert.alert(JSON.stringify({ error }));
    }
  }
}

export default MovieService;
