import React, { Component } from 'react'
import './QuoteGenerator.css';


const quotes = [
    ' "When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love.." Marcus Aurelius ',

    '"Courage doesn’t mean you don’t get afraid. Courage means you don’t let fear stop you." Bethany Hamilton',

    '"Before an intimidating conversation, I always remind myself that I will be the same person before and after the conversation, no matter the outcome." Olivia Fay',
  
  '“Life shrinks or expands in proportion to one s courage.” – Anaïs Nin',
  
  '"The time is always right to do what is right." —Martin Luther King Jr.',
  '“The only truly safe thing you can do is to try over and over again. To go for it, to get rejected, to repeat, to strive, to wish. Without rejection there is no frontier, there is no passion, and there is no magic.” ― James Altucher, Choose Yourself'

];

class QuoteGenerator extends Component {
constructor(props){
super(props)
this.state = {
quoteGenerated: '',
i: 0
}
}

generateQuote = () => {
this.setState(( {i} ) => {
if(i === quotes.length){
i = 0;
}

const quoteGenerated = quotes[i]
i++;
    
return {
i,
quoteGenerated,
}

});
}

render(){
const {quoteGenerated} = this.state
// const quoteGenerated = this.state.quoteGenerated;

return(
<div className="content text-center position-relative">

    <div className="row">
      <div className="col-12 mt-5">
        <h1>Random Quote Generator</h1>
      </div>
    </div>
   
    <div className="row ">
    <div className="col-6 offset-3 bg-white p-4 rounded-corners" >
        <div className="mb-4">{quoteGenerated}</div>
        <button className="btn button !important" 
         onClick ={this.generateQuote}>Generate Quote       
        </button>
      </div>
      </div> 
</div>

)
}

}


export default QuoteGenerator;