import {
  getAllTasks,
  addTask,
  deleteTask,
  updateTaskById,
} from '../../../database/Database';
import * as types from './types';

const addTaskDataRequest = () => ({
  type: types.ADD_TASK_LIST_REQUEST,
});

const addTaskDataSuccess = payload => ({
  type: types.ADD_TASK_LIST_SUCCESS,
  payload,
});

const addTaskDataFailure = payload => ({
  type: types.ADD_TASK_LIST_FAILURE,
  payload,
});

export const addTaskDataAction =
  (task, selectTask) => async (dispatch, getState) => {
    dispatch(addTaskDataRequest());
    try {
      if (selectTask) {
        updateTaskById(task, selectTask.taskId);
      } else {
        addTask(task, Date.now().toString());
      }
      dispatch(addTaskDataSuccess(getAllTasks()));
    } catch (error) {
      dispatch(addTaskDataFailure('some error occure'));
    }
  };

const getTaskListRequest = () => ({
  type: types.GET_TASK_LIST_REQUEST,
});

const getTaskListSuccess = payload => ({
  type: types.GET_TASK_LIST_SUCCESS,
  payload,
});

const getTaskListFailure = payload => ({
  type: types.GET_TASK_LIST_FAILURE,
  payload,
});

export const getTaskListAction = () => async (dispatch, getState) => {
  dispatch(getTaskListRequest());
  try {
    dispatch(getTaskListSuccess(getAllTasks()));
  } catch (error) {
    dispatch(getTaskListFailure('some error occure'));
  }
};

const deleteTaskListRequest = () => ({
  type: types.DELETE_TASK_REQUEST,
});

const deleteTaskListSuccess = payload => ({
  type: types.DELETE_TASK_SUCCESS,
  payload,
});

const deleteTaskListFailure = payload => ({
  type: types.DELETE_TASK_FAILURE,
  payload,
});

export const deleteTaskAction = taskId => async (dispatch, getState) => {
  dispatch(deleteTaskListRequest());
  try {
    deleteTask(taskId);
    dispatch(deleteTaskListSuccess(getAllTasks()));
  } catch (error) {
    dispatch(deleteTaskListFailure('some error occure'));
  }
};
