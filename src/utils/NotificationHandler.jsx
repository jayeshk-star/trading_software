// import { useEffect } from 'react';
import { onMessageListener } from './firebase.js';
// import { useNavigate } from 'react-router-dom';

const NotificationHandler = () => {
  // const navigate = useNavigate();
  //   const getRedirect = (redirect) => {
  //     const items = redirect.split('/');
  //     return `/${items[items.length - 1]}`;
  //   };

  // useEffect(() => {
  //   setTimeout(initMessage, 4000);
  // }, []);

  // const initMessage = () => {
  onMessageListener()
    .then((payload) => {
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
          tag: notification.title,
          data: { redirect: payload.data.redirect }
        };

        const sentNotification = new Notification(notificationTitle, notificationOptions);

        sentNotification.onclick = function (event) {
          event.preventDefault(); // prevent the browser from focusing the Notification's tab
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
    })
    .catch((err) => console.log('failed: ', err));
  // };

  //   onMessageRecieve(messaging, (payload) => {
  //     try {
  //       addNotification({
  //         title: payload.data.title,
  //         // subtitle: payload.notification.body,
  //         message: payload.data.body,
  //         // theme: 'darkblue',
  //         icon: payload.data.image,
  //         native: true // when using native, your OS will handle theming.
  //       });
  //       // if (payload.data?.redirect) {
  //       //   navigate(payload.data.redirect);
  //       // }
  //     } catch (error) {
  //     }
  //   });
  return <></>;
};

export default NotificationHandler;
