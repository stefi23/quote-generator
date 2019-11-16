import React, { PureComponent } from 'react'

class CurrentDateAndTime extends PureComponent {
    // state = {
    //     date: 'day',
    //     time: 'Now'
    // }
    constructor(props){
        super(props);
       this.state = {
        date: 'day',
        time: 'Now'
       }
    
    }
    
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tic(),
          1000
        );
      }

    tic = () => {
       this.setState(() => {
        const now = new Date ();
        const day = now.getDay();
        const month = now.getMonth() + 1;
        const year = now.getFullYear();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        return {
            date: `${day}/${month}/${year}`,
            time: `${hours}:${minutes}:${seconds}`
        }
        // day/month/year
       }) 
    }
    
//day / month / year
// current live hour and minutes

    render(){
        const {date,time} = this.state;
        return(
            <div className="container">
                <div className='row'>
                <div className='col-6 offset-3 text-danger'>
                Date: {date}  
                </div>
                </div>
                <div className='row'>
                <div className='col-6 offset-3 text-danger'>
                Time: {time}    
                </div>
                </div>
                <hr size="30" /> 
            </div>
        )
    }
};

export default CurrentDateAndTime;