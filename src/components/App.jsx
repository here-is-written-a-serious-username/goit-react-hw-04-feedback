import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Section from './Section';
import Statistics from './Statistics';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handleIncrement = (event) => {
    const { name } = event.target;

    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    let total = 0;
    Object.values(this.state).forEach(el => {
      total = total + el;
    });
    return total;
  }

  countPositiveFeedbackPercentage = () => {
    let total = this.countTotalFeedback();
    let percentage = Number((100 * this.state.good / total).toFixed(2));
    return percentage;
  }

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title='Please leave feedback'>
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleIncrement} />
        </Section>

        <Section title='Statistics'>
          {this.countTotalFeedback()
            ? <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
            : <Notification message="There is no feedback"></Notification>
          }
        </Section>
      </>
    );
  }
};