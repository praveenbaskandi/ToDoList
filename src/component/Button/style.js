import styled from 'styled-components/native';

import {Title} from '../Text';
import {Colors} from '../../utils/Colors';

export const Container = styled.View`
  width: 100%;
`;

export const Cover = styled.TouchableOpacity`
  background-color: ${Colors.pDarkBlue};
  height: 40px;
  margin-horizontal: 20px;
  border-radius: 20px;
  justify-content: center;
  margin-top: ${({mt = 0}) => mt}px;
  margin-bottom: ${({mb = 0}) => mb}px;
`;

export const Text = styled(Title)`
  font-size: ${({font = 0}) => font}px;
  color: ${Colors.white};
  text-align: center;
  line-height: 15px;
`;
