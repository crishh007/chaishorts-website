import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// English
import privacyPolicyEn from './locales/en/privacyPolicy.json';
import careersEn from './locales/en/careers.json';
import accountDeletionEn from './locales/en/accountDeletion.json';
import termsConditionsEn from './locales/en/termsConditions.json';
import cookieBannerEn from './locales/en/cookieBanner.json';
import cookiePreferencesEn from './locales/en/cookiePreferences.json';

// Hindi
import privacyPolicyHi from './locales/hi/privacyPolicy.json';
import careersHi from './locales/hi/careers.json';
import accountDeletionHi from './locales/hi/accountDeletion.json';
import termsConditionsHi from './locales/hi/termsConditions.json';
import cookieBannerHi from './locales/hi/cookieBanner.json';
import cookiePreferencesHi from './locales/hi/cookiePreferences.json';

// Telugu
import privacyPolicyTe from './locales/te/privacyPolicy.json';
import careersTe from './locales/te/careers.json';
import accountDeletionTe from './locales/te/accountDeletion.json';
import termsConditionsTe from './locales/te/termsConditions.json';
import cookieBannerTe from './locales/te/cookieBanner.json';
import cookiePreferencesTe from './locales/te/cookiePreferences.json';

// Tamil
import privacyPolicyTa from './locales/ta/privacyPolicy.json';
import careersTa from './locales/ta/careers.json';
import accountDeletionTa from './locales/ta/accountDeletion.json';
import termsConditionsTa from './locales/ta/termsConditions.json';
import cookieBannerTa from './locales/ta/cookieBanner.json';
import cookiePreferencesTa from './locales/ta/cookiePreferences.json';

// Kannada
import privacyPolicyKn from './locales/kn/privacyPolicy.json';
import careersKn from './locales/kn/careers.json';
import accountDeletionKn from './locales/kn/accountDeletion.json';
import termsConditionsKn from './locales/kn/termsConditions.json';
import cookieBannerKn from './locales/kn/cookieBanner.json';
import cookiePreferencesKn from './locales/kn/cookiePreferences.json';

// Malayalam
import privacyPolicyMl from './locales/ml/privacyPolicy.json';
import careersMl from './locales/ml/careers.json';
import accountDeletionMl from './locales/ml/accountDeletion.json';
import termsConditionsMl from './locales/ml/termsConditions.json';
import cookieBannerMl from './locales/ml/cookieBanner.json';
import cookiePreferencesMl from './locales/ml/cookiePreferences.json';

const resources = {
  en: {
    privacyPolicy: privacyPolicyEn,
    careers: careersEn,
    accountDeletion: accountDeletionEn,
    termsConditions: termsConditionsEn,
    cookieBanner: cookieBannerEn,
    cookiePreferences: cookiePreferencesEn
  },
  hi: {
    privacyPolicy: privacyPolicyHi,
    careers: careersHi,
    accountDeletion: accountDeletionHi,
    termsConditions: termsConditionsHi,
    cookieBanner: cookieBannerHi,
    cookiePreferences: cookiePreferencesHi
  },
  te: {
    privacyPolicy: privacyPolicyTe,
    careers: careersTe,
    accountDeletion: accountDeletionTe,
    termsConditions: termsConditionsTe,
    cookieBanner: cookieBannerTe,
    cookiePreferences: cookiePreferencesTe
  },
  ta: {
    privacyPolicy: privacyPolicyTa,
    careers: careersTa,
    accountDeletion: accountDeletionTa,
    termsConditions: termsConditionsTa,
    cookieBanner: cookieBannerTa,
    cookiePreferences: cookiePreferencesTa
  },
  kn: {
    privacyPolicy: privacyPolicyKn,
    careers: careersKn,
    accountDeletion: accountDeletionKn,
    termsConditions: termsConditionsKn,
    cookieBanner: cookieBannerKn,
    cookiePreferences: cookiePreferencesKn
  },
  ml: {
    privacyPolicy: privacyPolicyMl,
    careers: careersMl,
    accountDeletion: accountDeletionMl,
    termsConditions: termsConditionsMl,
    cookieBanner: cookieBannerMl,
    cookiePreferences: cookiePreferencesMl
  }
};

const savedLanguage = typeof window !== 'undefined' ? localStorage.getItem('preferredLanguage') : null;

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
