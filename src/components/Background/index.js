import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export default styled(LinearGradient).attrs({
  colors: ['#111', '#999'],
})`
  flex: 1;
`;
