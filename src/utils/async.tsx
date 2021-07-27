import AsyncStorage from '@react-native-async-storage/async-storage';
import { Statistic } from '../typing/generalTypes';

export const saveAsyncValue = async (key: string, value: string) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    return true;
  } catch (e) {
    console.log('error saving on async storage');
  }
};

export const getAsyncValue = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : '';
  } catch (e) {
    console.log('error reading from async storage');
  }
};

export const startConfigurations = async () => {
  let maxTestTime = await getAsyncValue('MaxTestTime');
  let questionsQuantity = await getAsyncValue('QuestionsQuantity');
  let statistics = await getAsyncValue('Statistics');
  let notificationTime = await getAsyncValue('NotificationTime');
  if (maxTestTime == '') {
    saveAsyncValue('MaxTestTime', '20');
    console.log('MaxTestTime initialized');
  }
  if (questionsQuantity == '') {
    saveAsyncValue('QuestionsQuantity', '15');
    console.log('QuestionsQuantity initialized');
  }
  if (statistics == '') {
    saveAsyncValue('Statistics', JSON.stringify([]));
    console.log('Statistics initialized');
  }
  if (notificationTime == '') {
    saveAsyncValue('NotificationTime', JSON.stringify('--:--'));
    console.log('NotificationTime initialized');
  }
};

export const saveStatistic = async (item: Statistic) => {
  await getAsyncValue('Statistics').then((result) => {
    let statistics: Statistic[] = JSON.parse(result);
    statistics.push(item);
    saveAsyncValue('Statistics', JSON.stringify(statistics));
  });
};

export const findStatistics = async () => {
  let statistics: Statistic[] = await getAsyncValue('Statistics');
  console.log(statistics);
};
