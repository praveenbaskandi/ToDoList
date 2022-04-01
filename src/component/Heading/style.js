import styled from 'styled-components/native';

import {Colors} from '../../utils/Colors';
import {statusbarHeight} from '../../utils/dimension';
import {isAndroid} from '../../utils/common';
import {Title} from '../Text';

export const HeadContainer = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  padding-horizontal: 20px;
  align-items: center;
  justify-content: space-between;
  margin-top: ${statusbarHeight}px;
  background-color: ${Colors.pBackColor};
`;

export const Heading = styled(Title)`
  font-size: 22px;
  line-height: 23px;
  align-self: center;
  color: ${Colors.white};
  ${isAndroid ? 'font-family: EffraHeavy;' : 'font-weight: 900;'}
`;
