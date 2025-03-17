import { useTranslation } from 'react-i18next';

const T = ({ path }) => {
  const { t } = useTranslation()
  return t(path)
}

export default T;