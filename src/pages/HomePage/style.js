import styled from 'styled-components/native';

import {Title} from '../../component/Text';
import {Colors} from '../../utils/Colors';

export const HeadContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${Colors.pBackColor};
`;

export const ListView = styled.FlatList`
  margin-top: 20px;
`;

export const TextNoTask = styled(Title)`
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  align-self: center;
  margin-top: 50px;
  color: ${Colors.white};
`;

export const BoxNoTask = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TextScore = styled(Title)`
  font-size: 14px;
  line-height: 17px;
  text-align: left;
  align-self: flex-end;
  margin-top: ${({mt = 0}) => mt}px;
  color: ${Colors.white};
`;

export const Box = styled.View`
  align-items: center;
  flex-direction: row;
  padding-horizontal: 25px;
  justify-content: space-between;
`;

export const RoundBtn = styled.TouchableOpacity`
  border-width: 1px;
  height: 60px;
  width: 60px;
  position: absolute;
  bottom: 50px;
  right: 20px;
  border-color: ${Colors.white};
  background-color: ${Colors.pDarkBlue};
  border-radius: 60px;
  justify-content: center;
  shadow-color: ${Colors.white};
  shadow-offset: 0 10px;
  shadow-opacity: 0.1;
  shadow-radius: 10px;
  elevation: 10;
`;

export const PlusIcon = styled.Image`
  width: 25px;
  height: 25px;
  align-self: center;
`;

export const DeleteIcon = styled.Image`
  width: 20px;
  height: 20px;
  align-self: center;
`;

export const ImageClick = styled.TouchableHighlight``;

export const TaskBox = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  height: 50px;
  border-width: 1px;
  padding-horizontal: 10px;
  border-radius: 50px;
  margin-top: 5px;
  border-color: ${Colors.pBack05};
  margin-horizontal: 20px;
  justify-content: space-between;
`;

export const TaskText = styled(Title)`
  font-size: 14px;
  line-height: 17px;
  text-align: left;
  color: ${Colors.white};
`;
