let APP_URL = '//grabthon.com/app';

let API_URL = '//192.168.43.92:8080';
if (process.env.NODE_ENV === 'production') {
  API_URL = '//192.168.43.92:8080';
}

export const API_HOST = `${API_URL}`;

export const ASSETS_URL = `${APP_URL}`;

// public paths
export const simplePath = `${API_URL}/public/simple`;
