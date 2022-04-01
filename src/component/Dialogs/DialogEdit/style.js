import styled from 'styled-components/native';

import {Title} from '../../Text';
import {Colors} from '../../../utils/Colors';
import {isAndroid} from '../../../utils/common';

export const Container = styled.View`
  width: 95%;
  max-width: 335px;
  border-radius: 15px;
  padding-vertical: 20px;
  align-self: center;
  align-items: center;
  background-color: ${Colors.white};
`;

export const TitleHead = styled(Title)`
  align-self: center;
  margin-horizontal: 20px;
  line-height: 36px;
  font-size: 24px;
  color: ${Colors.pTextBlack};
  ${isAndroid ? 'font-family: Effra-Heavy;' : 'font-weight: 900;'}
`;

export const ErrorText = styled(Title)`
  align-self: center;
  margin-horizontal: 20px;
  margin-top: 5px;
  line-height: 22px;
  font-size: 18px;
  color: ${Colors.pRed};
`;

export const Buttons = styled.View`
  padding-bottom: 26px;
  width: 100%;
  padding-horizontal: 20px;
`;

export const CloseBtn = styled.Image`
  width: 20px;
  height: 20px;
`;

export const TextBox = styled.TextInput.attrs(() => ({
  placeholderTextColor: Colors.pTextGrey,
}))`
  font-size: 14px;
  width: 80%;
  height: 40px;
  margin-top: 15px;
  border-radius: 20px;
  border-width: 1px;
  padding-vertical: 12px;
  padding-horizontal: 10px;
  color: ${Colors.pHeading};
`;

export const ImageClick = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  top: 20px;
`;
