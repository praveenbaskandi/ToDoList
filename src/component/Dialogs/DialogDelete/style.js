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

export const Subtitle = styled(Title)`
  align-self: center;
  margin-top: 7px;
  font-size: 18px;
  margin-horizontal: 20px;
  line-height: 24px;
  color: ${Colors.pTextBlack};
`;

export const Buttons = styled.View`
  padding-bottom: 26px;
  width: 100%;
  padding-horizontal: 20px;
`;
