import React from 'react';
import { Container, Asking, AskingText, Answers, Answer, AnswersText } from './styles';
import { RadioButton } from 'react-native-paper';
import { SvgUri } from 'react-native-svg';
import { QuestionProps } from '../../typing/navigationTypes';
import { View } from 'react-native';

export default function QuestionTypeThree({ actual, isReview, functionSetAnswer }: QuestionProps) {
  const [answer, setAnswer] = React.useState(actual.userAnswer);

  const handleAnswer = (answer: number) => {
    if (!isReview) {
      setAnswer(answer);
      functionSetAnswer(answer);
    }
  };

  return (
    <Container>
      <Asking>
        <AskingText>{actual.question}</AskingText>
      </Asking>
      <Answers>
        {actual.alternatives.map((alternative) => (
          <Answer
            onPress={() => handleAnswer(alternative.index)}
            key={alternative.index}
            style={{
              backgroundColor: isReview
                ? answer == alternative.index
                  ? answer == actual.answer
                    ? 'rgba(71,245,71,0.7)'
                    : 'rgba(245,71,71,0.7)'
                  : alternative.index == actual.answer
                  ? 'rgba(71,245,71,0.7)'
                  : 'rgba(0,0,0,0)'
                : 'rgba(0,0,0,0)',
            }}>
            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
              <RadioButton
                disabled={isReview}
                color={'#000'}
                value={alternative.index.toString()}
                status={answer == alternative.index ? 'checked' : 'unchecked'}
                onPress={() => handleAnswer(alternative.index)}
              />
              <AnswersText>
                <SvgUri width="70" height="70" uri={alternative.content} />
              </AnswersText>
            </View>
          </Answer>
        ))}
      </Answers>
    </Container>
  );
}
