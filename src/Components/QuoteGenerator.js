import React, { Component } from "react";
import "./QuoteGenerator.css";

const quotes = [
  '"When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love." Marcus Aurelius ',

  '"Courage doesn’t mean you don’t get afraid. Courage means you don’t let fear stop you." Bethany Hamilton',

  '"Before an intimidating conversation, I always remind myself that I will be the same person before and after the conversation, no matter the outcome." Olivia Fay',

  "“Life shrinks or expands in proportion to one's courage.” – Anaïs Nin",

  '"The time is always right to do what is right." —Martin Luther King Jr.',

  `The only truly safe thing you can do is to try over and over again. To go for it, to get rejected, to repeat, to strive, to wish. Without rejection there is no frontier, there is no passion, and there is no magic." ― James Altucher, Choose Yourself`,

  `"We are what we repeatedly do. Excellence, then, is not an act, but a habit." – Aristotle`,

  `"The journey of a thousand miles begins with one step." – Lao Tzu`,

  `"In the long run, the sharpest weapon of all is a kind and gentle spirit." 
― Anne Frank, The Diary of Anne Frank`,

  `“Whomever you become, whatever you make yourself into, that is who you always were.”
― Tara Westover, Educated`,
  ``,

  `"Most things—including public speaking—can be mastered if you’re willing to put in the time and energy."
Tony Robbins
`,
];

class QuoteGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteGenerated: "",
      i: 1,
    };
  }

  generateQuote = () => {
    this.setState(({ i }) => {
      if (i === quotes.length) {
        i = 0;
      }
      console.log(quotes.length);
      const quoteGenerated = quotes[i];
      i++;

      return {
        i,
        quoteGenerated,
      };
    });
  };

  render() {
    const { quoteGenerated, i } = this.state;

    return (
      <div className="content text-center position-relative">
        <div className="row ">
          <div className="col-10 offset-1 p-4 rounded-corners">
            <div className="mb-4 text-white quote">
              {quoteGenerated ? quoteGenerated : quotes[0]}
            </div>
            <button
              className="btn button !important"
              onClick={this.generateQuote}
            >
              Generate Quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteGenerator;
