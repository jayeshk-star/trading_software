import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';

const cookieLoad = () => cookie.load('connect.sid');

const cookieSave = (token) => cookie.save('connect.sid', token, { path: '/' });

const cookieRemove = () => cookie.remove('connect.sid', { path: '/' });

const decodeToken = (token) => {
  const tokenloaded = token;
  if (tokenloaded !== undefined) {
    return jwt.decode(tokenloaded);
  }
};

export { cookieLoad, cookieSave, cookieRemove, decodeToken };
