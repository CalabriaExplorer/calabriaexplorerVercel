import { useLanguage } from "@/contexts/LanguageContext";

const useTranslation = () => {
  const { language, t } = useLanguage();
  return { language, t };
};

export default useTranslation;
