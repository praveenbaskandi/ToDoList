import React, {useState} from 'react';
import {string, func} from 'prop-types';

import imgClose from '../../../assets/img-close.png';
import Button from '../../Button';
import Dialog from '../Dialog';
import * as S from './style';

const DialogEdit = ({
  title,
  btnText,
  placeHolder,
  onCloseClick,
  buttonClick,
  editText,
  errorText,
  ...rest
}) => {
  const [task, setTask] = useState(editText);
  const [error, setError] = useState(false);
  return (
    <Dialog centerInScreen withCustomContainer {...rest}>
      <S.Container>
        <S.ImageClick onPress={onCloseClick}>
          <S.CloseBtn source={imgClose} />
        </S.ImageClick>
        {title && <S.TitleHead>{title}</S.TitleHead>}
        <S.TextBox
          placeholder={placeHolder}
          value={task}
          onChangeText={setTask}
        />
        {error ? <S.ErrorText>{errorText}</S.ErrorText> : null}
        <Button
          btnText={btnText}
          click={() => {
            if (task === '') {
              setError(true);
            } else {
              buttonClick(task);
              onCloseClick();
            }
          }}
          mt={20}
        />
      </S.Container>
    </Dialog>
  );
};

DialogEdit.propTypes = {
  buttonClick: func.isRequired,
  onCloseClick: func,
  title: string,
  btnText: string,
  placeHolder: string,
  editText: string,
  errorText: string,
};

DialogEdit.defaultProps = {
  buttonClick: () => {},
  onCloseClick: () => {},
};

export default DialogEdit;
