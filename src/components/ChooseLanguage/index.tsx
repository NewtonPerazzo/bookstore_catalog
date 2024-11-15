import { useTranslation } from 'react-i18next';
import { Button, Container } from './style';

const ChooseLanguage = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Container>
      <Button onClick={() => handleLanguageChange('pt')}>PT</Button>
      <Button onClick={() => handleLanguageChange('en')}>EN</Button>
    </Container>
  );
};

export default ChooseLanguage;
