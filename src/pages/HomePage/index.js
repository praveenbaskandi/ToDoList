import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';

import {
  getTaskListAction,
  addTaskDataAction,
  deleteTaskAction,
} from '../../redux/noteRedux/action';
import DialogDelete from '../../component/Dialogs/DialogDelete';
import DialogEdit from '../../component/Dialogs/DialogEdit';
import imgPlus from '../../assets/img-plus.png';
import imgTrash from '../../assets/img-trash.png';
import Header from '../../component/Heading';
import useSelect from '../selector';
import * as S from './style';

const HomePage = () => {
  const dispatch = useDispatch();
  const {translations, taskList} = useSelect();
  const [selectItem, setSelectItem] = useState();
  const [task, setTask] = useState(taskList);
  const [dialogEdit, setDialogEdit] = useState(false);
  const [dialogDelete, setDialogDelete] = useState(false);

  useEffect(() => {
    setTask(taskList);
  }, [taskList]);

  useEffect(() => {
    dispatch(getTaskListAction());
  }, [dispatch]);

  const deleteBtnClick = item => {
    setDialogDelete(true);
    setSelectItem(item);
  };

  const editBtnClick = item => {
    setDialogEdit(true);
    setSelectItem(item);
  };

  const saveBtnClick = item => {
    dispatch(addTaskDataAction(item, selectItem));
  };

  const renderItem = ({item}) => (
    <S.TaskBox onPress={() => editBtnClick(item)}>
      <S.TaskText>{item.task}</S.TaskText>
      <S.ImageClick onPress={() => deleteBtnClick(item)}>
        <S.DeleteIcon source={imgTrash} />
      </S.ImageClick>
    </S.TaskBox>
  );

  return (
    <S.HeadContainer>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />

      {/* Header UI */}
      <Header heading={translations.toDOAppDemo} />

      {task.length === 0 ? (
        <S.BoxNoTask>
          <S.TextNoTask>{translations.noTask}</S.TextNoTask>
        </S.BoxNoTask>
      ) : (
        <S.ListView
          data={task}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}

      <S.RoundBtn onPress={() => editBtnClick(null)}>
        <S.PlusIcon source={imgPlus} />
      </S.RoundBtn>

      {/* Dialog UI Add or Update*/}
      {dialogEdit ? (
        <DialogEdit
          isVisible={dialogEdit}
          errorText={translations.errorText}
          title={translations.toDoTask}
          btnText={selectItem ? translations.update : translations.add}
          editText={selectItem ? selectItem?.task : ''}
          placeHolder={translations.enterTask}
          subTitle={translations.areYouSure}
          onCloseClick={() => setDialogEdit(false)}
          buttonClick={text => saveBtnClick(text)}
        />
      ) : null}

      {/* Dialog UI Delete*/}
      <DialogDelete
        isVisible={dialogDelete}
        title={translations.toDoTask}
        btnTextYes={translations.yes}
        btnTextNo={translations.no}
        buttonClickNo={() => setDialogDelete(false)}
        buttonClickYes={() => {
          setDialogDelete(false);
          dispatch(deleteTaskAction(selectItem?.taskId));
        }}
        subTitle={translations.areYouSure}
      />
    </S.HeadContainer>
  );
};

export default HomePage;
