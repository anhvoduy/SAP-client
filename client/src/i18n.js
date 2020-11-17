import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'last_update': 'Last updated, Today',      
      'search': 'Search...',
      'not_found_data': 'Not found any data',
      'app_is_online': 'Online: {{username}}',
      'app_is_offline': 'Offline: {{username}}',
      'refresh': 'Refresh',
      'sign_out': 'Sign out'
    }
  },
  vi: {
    translation: {
      'last_update': 'Last updated, Today',
      'search': 'Tìm kiếm...',
      'not_found_data': 'Không tìm thấy dữ liệu',
      'app_is_online': 'Online: {{username}}',
      'app_is_offline': 'Offline: {{username}}',
      'refresh': 'Đồng bộ',
      'sign_out': 'Đăng xuất'
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'vi',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;