import axios from 'axios';
import { cookieLoad, cookieRemove } from './cookie';

const API_GET = async (resourse) => {
  const token = `Bearer ${cookieLoad('connect.sid')}`;
  return await axios
    .get(`${process.env.REACT_APP_API_URL}/admin/${resourse}`, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
        timeOffset: new Date().getTimezoneOffset()
      }
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      unauthorized(error);
      throw error.response;
    });
};

const API_POST = async (resourse, body) => {
  const token = `Bearer ${cookieLoad('connect.sid')}`;
  return await axios
    .post(`${process.env.REACT_APP_API_URL}/admin/${resourse}`, body, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
        timeOffset: new Date().getTimezoneOffset()
      }
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      unauthorized(error);
      throw error.response;
    });
};
const PRE_SEND_URL = async (resourse, body) => {
  const token = `Bearer ${cookieLoad('connect.sid')}`;
  return await axios
    .post(`${process.env.REACT_APP_API_URL}/${resourse}`, body, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
        timeOffset: new Date().getTimezoneOffset()
      }
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      unauthorized(error);
      throw error.response;
    });
};

const API_PATCH = async (resourse, body) => {
  const token = `Bearer ${cookieLoad('connect.sid')}`;
  return await axios
    .patch(`${process.env.REACT_APP_API_URL}/admin/${resourse}`, body, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
        timeOffset: new Date().getTimezoneOffset()
      }
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      unauthorized(error);
      throw error.response;
    });
};

const API_PUT = async (resourse, body) => {
  const token = `Bearer ${cookieLoad('connect.sid')}`;
  return await axios
    .put(`${process.env.REACT_APP_API_URL}/admin/${resourse}`, body, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
        timeOffset: new Date().getTimezoneOffset()
      }
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      unauthorized(error);
      throw error.response;
    });
};

const API_DELETE = async (resourse, body) => {
  const token = `Bearer ${cookieLoad('connect.sid')}`;
  return await axios
    .delete(`${process.env.REACT_APP_API_URL}/admin/${resourse}`, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
        timeOffset: new Date().getTimezoneOffset()
      },
      data: body
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      unauthorized(error);
      throw error.response;
    });
};
const API_UPLOAD_FILE = async (resource, file) => {
  const token = `Bearer ${cookieLoad('connect.sid')}`;
  const formData = new FormData();
  formData.append('file', file);
  const config = {
    method: 'post',
    url: `${process.env.REACT_APP_API_URL}/admin/${resource}`,
    headers: {
      Authorization: token,
      'Content-Type': 'multipart/form-data'
    },
    data: formData
  };

  return await axios(config)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      unauthorized(error);
      throw error.response;
    });
};

const API_HANDLE_ERROR = (err, dispatch) => {
  if (err.status === 404) {
    dispatch({
      type: 'ALERT_OPEN',
      severity: 'error',
      isOpen: true,
      label: 'Network Error'
    });
  } else if (err.status === 500) {
    dispatch({
      type: 'ALERT_OPEN',
      severity: 'error',
      isOpen: true,
      label: 'Oops!!, Please try again'
    });
  } else {
    dispatch({
      type: 'ALERT_OPEN',
      severity: 'error',
      isOpen: true,
      label: err?.data?.errors[0]?.message || 'Oops!!, Please try again'
    });
  }
};

export {
  API_GET,
  API_POST,
  API_PATCH,
  API_DELETE,
  API_UPLOAD_FILE,
  PRE_SEND_URL,
  API_PUT,
  API_HANDLE_ERROR
};

function unauthorized(error) {
  if (error?.response?.status === 401) {
    window.location.href = '/login';
    cookieRemove();
  }
}
