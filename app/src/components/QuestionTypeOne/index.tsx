import React from 'react';
import { Container, Asking, AskingText, Answers, Answer, AnswersText } from './styles';
import { RadioButton } from 'react-native-paper';
import { QuestionProps } from '../../typing/navigationTypes';
import { View } from 'react-native';

export default function QuestionTypeOne({ current, isReview, functionSetAnswer }: QuestionProps) {
  const handleAnswer = (answer: number) => {
    if (!isReview) {
      functionSetAnswer(answer);
    }
  };

  return (
    <Container>
      <Asking>
        <AskingText>{current.question}</AskingText>
      </Asking>
      <Answers>
        {current.alternatives.map((alternative) => (
          <Answer
            onPress={() => handleAnswer(alternative.id)}
            key={alternative.id}
            style={{
              backgroundColor: isReview
                ? current.userAnswer == alternative.id
                  ? current.userAnswer == current.answer
                    ? 'rgba(71,245,71,0.7)'
                    : 'rgba(245,71,71,0.7)'
                  : alternative.id == current.answer
                  ? 'rgba(71,245,71,0.7)'
                  : 'rgba(0,0,0,0)'
                : 'rgba(0,0,0,0)',
            }}>
            <RadioButton
              disabled={isReview}
              color={'#000'}
              value={alternative.id.toString()}
              status={current.userAnswer == alternative.id ? 'checked' : 'unchecked'}
              onPress={() => handleAnswer(alternative.id)}
            />
            <AnswersText>{alternative.text}</AnswersText>
          </Answer>
        ))}
      </Answers>
    </Container>
  );
}
