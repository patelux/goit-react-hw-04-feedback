import { useState } from 'react';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { Statistic } from './Statictics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export function App() {
 
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const onLeaveFeedback = e => {
    const { name } = e.target;
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return Number(bad + good + neutral);
  };

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback()
      ? Math.ceil((good / countTotalFeedback()) * 100) : 0;
  };


const totalFeedback = countTotalFeedback();
const positivePercentage = countPositiveFeedbackPercentage();

return (
  <>
    <Section title="Please leave feedback">
      <FeedbackOptions
        onLeaveFeedback={onLeaveFeedback}
        options={['good', 'bad', 'neutral']}
      />
    </Section>
    <Section title="Statistics">
      {countTotalFeedback === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Statistic
          className="feedback-title"
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        />
      )}
    </Section>
  </>
);
}
