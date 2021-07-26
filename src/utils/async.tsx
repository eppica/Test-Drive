import AsyncStorage from '@react-native-async-storage/async-storage';

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
  maxTestTime == '' ? saveAsyncValue('MaxTestTime', '20') : null;
  questionsQuantity == '' ? saveAsyncValue('QuestionsQuantity', '15') : null;
};
