import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';
import AnswerOption from '../components/answer-option';
import { PrimaryButton } from '../components/primary-button';

export default function OptionsQuestion() {
  const answers = [
    {
      id: 'A',
      text: 'They provide water, trade routes, and fertile land',
      value: true,
    },
    {
      id: 'B',
      text: 'They offer higher elevation for defense',
      value: false,
    },
    {
      id: 'C',
      text: 'They have colder and more stable climates',
    },
    {
      id: 'D',
      text: 'They prevent natural disasters entirely',
      value: false,
    },
    {
      id: 'E',
      text: 'They are always closer to deserts',
      value: false,
    },
  ];

  return (
    <SafeAreaView
      style={{ flex: 1, padding: 20, justifyContent: 'space-between' }}
    >
      <View>
        <Text
          style={{
            fontFamily: 'Outfit-Regular',
            fontSize: 24,
            marginBottom: 16,
          }}
        >
          Why do most major cities develop near rivers or coastlines around the
          world?
        </Text>
        <View>
          {answers.map((answer) => {
            return (
              <AnswerOption
                id={answer.id}
                key={answer.id}
                text={answer.text}
                value={answer.value}
              />
            );
          })}
        </View>
      </View>
      <PrimaryButton text="Next question" />
    </SafeAreaView>
  );
}
