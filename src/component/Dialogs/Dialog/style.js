import styled from 'styled-components/native';

import {Colors} from '../../../utils/Colors';

export const ContainerView = styled.View`
  background-color: ${Colors.white};
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  justify-content: center;
  padding: 20px;
  max-width: 400px;
`;

export const ContentContainer = styled.View`
  align-items: center;
  background-color: ${Colors.white};
  text-align: center;
`;

export const getDialogStyle = centerInScreen => ({
  justifyContent: centerInScreen ? 'center' : 'flex-end',
  margin: 0,
  paddingTop: 0,
});
