import {useSelector} from 'react-redux';

const useSelect = () => {
  const {screen} = useSelector(({locale}) => locale.translations.data);
  const {isLoading, taskList} = useSelector(({noteRedux: NR}) => NR);

  return {
    isLoading,
    taskList,
    translations: {
      ...screen,
    },
  };
};

export default useSelect;
