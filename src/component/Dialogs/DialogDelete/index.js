import React from 'react';
import {string, func} from 'prop-types';

import Button from '../../Button';
import Dialog from '../Dialog';
import * as S from './style';

const DialogSuccess = ({
  title,
  subTitle,
  btnTextYes,
  btnTextNo,
  buttonClickYes,
  buttonClickNo,
  ...rest
}) => {
  return (
    <Dialog centerInScreen withCustomContainer {...rest}>
      <S.Container>
        {title && <S.TitleHead>{title}</S.TitleHead>}
        <S.Subtitle>{subTitle}</S.Subtitle>
        <Button btnText={btnTextYes} click={buttonClickYes} mt={20} />
        <Button btnText={btnTextNo} click={buttonClickNo} mt={10} />
      </S.Container>
    </Dialog>
  );
};

DialogSuccess.propTypes = {
  buttonClickYes: func.isRequired,
  buttonClickNo: func.isRequired,
  title: string,
  subTitle: string,
  btnTextYes: string,
  btnTextNo: string,
};

DialogSuccess.defaultProps = {
  buttonClickYes: () => {},
  buttonClickNo: () => {},
};

export default DialogSuccess;
