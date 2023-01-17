// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getMessaging, getToken, isSupported, onMessage } from 'firebase/messaging';
import { API_PATCH } from './api';

const { REACT_APP_VAPID_KEY } = process.env;
const publicKey = REACT_APP_VAPID_KEY;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: 'AIzaSyB0V0OhqtGk2Oyz-eN6N9h_gb8oYEPLvmM',
  authDomain: 'dror-app-1559400361667.firebaseapp.com',
  databaseURL: 'https://dror-app-1559400361667.firebaseio.com',
  projectId: 'dror-app-1559400361667',
  storageBucket: 'dror-app-1559400361667.appspot.com',
  messagingSenderId: '373245165036',
  appId: '1:373245165036:web:452e36b70fa4bb44c5d4c9',
  measurementId: 'G-6FN44H52FM'
};

let app;
let messaging;

isSupported()
  .then((data) => {
    if (data === true) {
      // Initialize Firebase
      app = initializeApp(firebaseConfig);
      // getAnalytics(app); // include analytics

      messaging = getMessaging(app);
    }
  })
  .catch((err) => {
    console.log(err);
  });

const requestPermission = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      console.log('Notification permission granted.');
    }
  } catch (error) {
    console.log(error);
  }
};

// export const requestForFirebaseToken = () => {
//   if (isSupported()) {
//     return getToken(messaging, { vapidKey: publicKey })
//       .then((currentToken) => {
//         if (currentToken) {
//           API_PATCH('webNotification/updateFirebaseToken', {
//             webFirebaseToken: currentToken
//           });
//           // .then((res) => {
//           //   console.log(res);
//           // })
//           // .catch((err) => {
//           //   console.log(err);
//           // });
//           console.log('current token for client: ', currentToken);

//           // Perform any other neccessary action with the token
//         } else {
//           // Show permission request UI
//           requestPermission();
//         }
//       })
//       .catch((err) => {
//         console.log('An error occurred while retrieving token. ', err);
//       });
//   } else {
//     return null;
//   }
// };

export const requestForFirebaseToken = (setTokenFound) => {
  if (isSupported())
    return getToken(messaging, { vapidKey: publicKey })
      .then((currentToken) => {
        if (currentToken) {
          // setTokenFound(true);
          API_PATCH('webNotification/updateFirebaseToken', {
            webFirebaseToken: currentToken
          });
          // Track the token -> client mapping, by sending to backend server
          // show on the UI that permission is secured
        } else {
          console.log('No registration token available. Request permission to generate one.');
          requestPermission();
          // setTokenFound(false);
          // shows on the UI that permission is required
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // catch error while creating client token
      });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      try {
        const notification = payload.data;

        if (!notification) {
          return;
        }
        // Customize notification here
        const notificationTitle = notification.title;
        const notificationOptions = {
          body: notification.body,
          icon: payload.data.image,
          tag: notification.body,
          data: { redirect: payload.data.redirect, notificationId: payload.data.notificationId }
        };

        const sentNotification = new Notification(notificationTitle, notificationOptions);

        sentNotification.onclick = function (event) {
          event.preventDefault(); // prevent the browser from focusing the Notification's tab
          API_PATCH(
            `notification/markNotificationAsRead?notificationId=${event.target.data.notificationId}`
          );
          window.open(event.target.data.redirect, '_blank');
        };

        // return registration.showNotification(notificationTitle, notificationOptions);
        // addNotification({
        //   title: payload.data.title,
        //   // subtitle: payload.notification.body,
        //   message: payload.data.body,
        //   onClick: (e) => window.open(payload.data.redirect, '_blank')?.focus(),
        //   // theme: 'darkblue',
        //   icon: payload.data.image,
        //   native: true // when using native, your OS will handle theming.
        // });
      } catch (error) {
        console.log(error);
      }
      resolve(payload);
    });
  });
