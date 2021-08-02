import React, { SyntheticEvent, useEffect, useState } from 'react';
import { Switch } from 'react-native';
import { ViewStyled, List, HideableList, Title, ConfigText, Input } from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import { getAsyncValue, saveAsyncValue } from '../../utils/async';

import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications';

export default function Configuracoes() {
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [notificationHour, setNotificationHour] = useState('--:--');
  const [notificationHourDate, setNotificationHourDate] = useState(new Date());
  const [maxTestTime, setMaxTestTime] = useState('--');
  const [questionsQuantity, setQuestionsQuantity] = useState('--');

  const sendNotification = (hour: number, minutes: number) => {
    const schedulingOptions = {
      content: {
        title: 'Vrumm Vrumm',
        body: 'É hora de estudar para o seu teste teórico de direção!',
        sound: true,
        priority: Notifications.AndroidNotificationPriority.HIGH,
        color: 'white',
      },
      trigger: {
        hour: hour,
        minute: minutes,
        repeats: true,
      },
    };
    cancelAllScheduledNotifications();
    Notifications.scheduleNotificationAsync(schedulingOptions);
  };

  function cancelAllScheduledNotifications() {
    Notifications.cancelAllScheduledNotificationsAsync();
  }

  const handleNotification = () => {
    console.log('Notificação recebida com o aplicativo aberto');
  };

  const askNotification = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    if (Constants.isDevice && status === 'granted')
      console.log('Permissão para enviar notificações concedida.');
  };

  useEffect(() => {
    askNotification();
    const listener = Notifications.addNotificationReceivedListener(handleNotification);
    return () => listener.remove();
  }, []);

  useEffect(() => {
    getAsyncValue('MaxTestTime').then((result) => {
      setMaxTestTime(result);
    });
    getAsyncValue('QuestionsQuantity').then((result) => {
      setQuestionsQuantity(result);
    });
  }, []);

  const handleSwitch = () => {
    if (isNotificationEnabled) {
      setIsNotificationEnabled(false);
      cancelAllScheduledNotifications();
    } else {
      setIsNotificationEnabled(true);
      if (notificationHour != '--:--') {
        sendNotification(
          Number(notificationHour.substr(0, 2)),
          Number(notificationHour.substr(2, 2)),
        );
      }
    }
  };

  const handleTimeChange = (
    event: SyntheticEvent<Readonly<{ timestamp: number }>, Event>,
    date: Date | undefined,
  ) => {
    setShowTimePicker(false);
    if (date != undefined) {
      setNotificationHourDate(date);
      setNotificationHour(date.toLocaleTimeString().substring(0, 5));
      saveAsyncValue('NotificationTime', notificationHour);
      sendNotification(
        parseInt(date.toLocaleTimeString().substr(0, 2)),
        parseInt(date.toLocaleTimeString().substr(3, 2)),
      );
    }
  };

  const handleShowTimePicker = () => setShowTimePicker(true);

  const handleMaxTestTime = (text: string) => {
    setMaxTestTime(text);
    saveAsyncValue('MaxTestTime', text);
  };

  const handleQuestionsQuantity = (text: string) => {
    setQuestionsQuantity(text);
    saveAsyncValue('QuestionsQuantity', text);
  };

  return (
    <ViewStyled>
      <List>
        <Title>Notificações</Title>
        <Switch
          trackColor={{ false: '#767577', true: '#d0cfd1' }}
          thumbColor={isNotificationEnabled ? '#000' : '#f4f3f4'}
          onValueChange={handleSwitch}
          value={isNotificationEnabled}
        />
      </List>

      {isNotificationEnabled && (
        <HideableList>
          <Title>Hora da notificação</Title>
          <ConfigText onPress={handleShowTimePicker}>{notificationHour}</ConfigText>
          {showTimePicker && (
            <DateTimePicker
              value={notificationHourDate}
              mode="time"
              is24Hour={true}
              display="default"
              onChange={handleTimeChange}
            />
          )}
        </HideableList>
      )}
      <List>
        <Title>Duração dos Testes (min)</Title>
        <Input onChangeText={handleMaxTestTime} value={maxTestTime} keyboardType="numeric" />
      </List>
      <List>
        <Title>Quantidade de Questões</Title>
        <Input
          onChangeText={handleQuestionsQuantity}
          value={questionsQuantity}
          keyboardType="numeric"
        />
      </List>
    </ViewStyled>
  );
}
