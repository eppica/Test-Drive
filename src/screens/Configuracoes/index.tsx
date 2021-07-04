import React, { SyntheticEvent, useState } from 'react';
import { Switch } from 'react-native';
import { ViewStyled, List, HideableList, Title, ConfigText, Input } from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Configuracoes() {
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [notificationHour, setNotificationHour] = useState(new Date(0));
  const [maxTestTime, setMaxTestTime] = useState('20');
  const [questionsQuantity, setQuestionsQuantity] = useState('10');

  const handleSwitch = () => setIsNotificationEnabled((previousState) => !previousState);

  const handleTimeChange = (
    event: SyntheticEvent<Readonly<{ timestamp: number }>, Event>,
    date: Date | undefined,
  ) => {
    setShowTimePicker(false);
    setNotificationHour(date || notificationHour);
  };

  const handleShowTimePicker = () => setShowTimePicker(true);

  const handleMaxTestTime = (text: string) => {
    setMaxTestTime(text);
  };

  const handleQuestionsQuantity = (text: string) => {
    setQuestionsQuantity(text);
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
          <ConfigText onPress={handleShowTimePicker}>
            {notificationHour.toTimeString().substr(0, 5)}
          </ConfigText>
          {showTimePicker && (
            <DateTimePicker
              value={notificationHour}
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
