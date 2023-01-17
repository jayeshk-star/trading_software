// self.addEventListener('notificationclick', (event) => {
//   event.waitUntil(
//     clients.matchAll().then((cs) => {
//       const client = cs.find((c) => c.visibilityState === 'visible');
//       const redirectUrl = event.notification?.data?.redirect;

//       // if (client !== undefined && redirectUrl) {
//       //   // when the tab is open and visible
//       //   client.navigate(redirectUrl);
//       // } else if (redirectUrl) {
//       //   // when there is no tab opened
//       //   clients.openWindow(event.notification.data.redirect);
//       // }
//       if (redirectUrl) {
//         clients.openWindow(event.notification.data.redirect);
//       }
//     })
//   );

//   return self.registration.getNotifications().then((ns) => ns.forEach((n) => n.close()));
// });

self.onnotificationclick = (event) => {
  console.log('On notification click: ', event.notification.tag);
  event.notification.close();

  // This looks to see if the current is already open and
  // focuses if it is
  event.waitUntil(
    clients
      .matchAll({
        type: 'window'
      })
      .then((clientList) => {
        for (const client of clientList) {
          if (client.url === '/' && 'focus' in client) return client.focus();
        }
        if (clients.openWindow) return clients.openWindow(event.notification.data.redirect);
      })
  );
};

// Scripts for firebase and firebase messaging

importScripts('https://www.gstatic.com/firebasejs/9.9.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.9.2/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: 'AIzaSyB0V0OhqtGk2Oyz-eN6N9h_gb8oYEPLvmM',
  authDomain: 'dror-app-1559400361667.firebaseapp.com',
  databaseURL: 'https://dror-app-1559400361667.firebaseio.com',
  projectId: 'dror-app-1559400361667',
  storageBucket: 'dror-app-1559400361667.appspot.com',
  messagingSenderId: '373245165036',
  appId: '1:373245165036:web:452e36b70fa4bb44c5d4c9',
  measurementId: 'G-6FN44H52FM'
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

console.log('asdasd', firebase.messaging.isSupported());

if (firebase.messaging.isSupported()) {
  messaging.onBackgroundMessage(function (payload) {
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
      data: { redirect: payload.data.redirect }
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
    // self.registration.hideNotification();
  });
}
