// import { Card } from './BlogCard/BlogCard';
// import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
// import { Feedback } from './Feedback/Feedback';
import React, {Component} from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  handleNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  handleBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () => {
    return (Object.values(this.state).reduce((acc, item) => acc + item, 0));
}
  
  countPositiveFeedbackPercentage = () => {
    return (this.countTotalFeedback() !==0
    ? Math.ceil((this.state.good / this.countTotalFeedback()) * 100) :0 );
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <h2 class="title"> Please live feedback</h2>
        <div class="buttons" style={{ display: 'flex', gap: '20px' }}>
          <button 
            type="button" 
            onClick={this.handleGood}
            className="btn"
            id="expand-all">Good</button>

          <button 
          type="button"
            onClick={this.handleNeutral}
            className="btn"
            id="expand-all">Neutral</button>

          <button 
          type="button"
          onClick={this.handleBad}
          className="btn"
          id="expand-all">Bad</button>
        </div>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {percentage}%</p>

      </>
    );
  }
 };



















// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
