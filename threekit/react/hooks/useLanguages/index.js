import { useSelector, useDispatch } from 'react-redux';
import {
  getLanguage,
  getLanguageOptions,
  setLanguage,
} from '../../store/threekit';

const useLanguages = () => {
  const dispatch = useDispatch();
  const language = useSelector(getLanguage);
  const languages = useSelector(getLanguageOptions);

  const handleChange = (language) => {
    if (language?.length && languages.includes(language)) {
      dispatch(setLanguage(language));
    }
  };

  return [language, languages, handleChange];
};

export default useLanguages;
