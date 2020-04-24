import React from 'react';
import { Text, View, Vibration, Platform } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants'

export default class NotificationStruct extends React.Component {
  state = {
    expoPushToken: '',
    notification: {},
  };

  registerForPushNotificationsAsync = async () => {
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = await Notifications.getExpoPushTokenAsync();
      console.log(token);
      this.setState({ expoPushToken: token });
    } else {
      alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
      Notifications.createChannelAndroidAsync('default', {
        name: 'default',
        sound: true,
        priority: 'max',
        vibrate: [0, 250, 250, 250],
      });
    }
  };

  componentDidMount() {
    this.registerForPushNotificationsAsync();

    // Handle notifications that are received or selected while the app
    // is open. If the app was closed and then opened by tapping the
    // notification (rather than just tapping the app icon to open it),
    // this function will fire on the next tick after the app starts
    // with the notification data.
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = notification => {
    Vibration.vibrate();
    console.log(notification);
    this.setState({ notification: notification });
  };

  // Can use this function below, OR use Expo's Push Notification Tool-> https://expo.io/dashboard/notifications
  sendPushNotification = async () => {
    const message = {
      to: this.state.expoPushToken,
      sound: 'default',
      title: 'Breathing Reminder',
      body: 'Make sure to take time to relax!',
      data: { data: 'User info' },
      _displayInForeground: true,
    };
    const response = await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
  };
  scheduleNotification = async () => {
    let notificationId = Notifications.scheduleLocalNotificationAsync(
      {
        title: "Breathing",
        body: 'Time to do your breathing exercise!',
      }, //86400000
      {
        repeat: 'day',
        time: new Date().getTime() + 86400000,
      },
    );
    
  }; //console.log(notificationId);

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Title></Title>
          <Paragraph></Paragraph>
        </View>
        <Button mode='outlined' onPress={() => this.scheduleNotification()}> Set breathing reminder </Button>
        <Button mode='outlined' onPress={() => Notifications.cancelAllScheduledNotificationsAsync()}> Press to cancel notifications </Button>
      </View>
    );
  }
}

//          <Title>Status: {this.state.notification.origin}</Title>
//          <Paragraph>Data: {JSON.stringify(this.state.notification.data)}</Paragraph>
//
//this.sendPushNotification()`

/*  TO GET PUSH RECEIPTS, RUN THE FOLLOWING COMMAND IN TERMINAL, WITH THE RECEIPTID SHOWN IN THE CONSOLE LOGS

    curl -H "Content-Type: application/json" -X POST "https://exp.host/--/api/v2/push/getReceipts" -d '{
      "ids": ["YOUR RECEIPTID STRING HERE"]
      }'
*/