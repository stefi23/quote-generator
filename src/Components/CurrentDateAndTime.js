import React, { PureComponent } from 'react'
import './CurrentDateAndTime.css';


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
        const date = now.getDate();
        const month = now.getMonth() + 1;
        const year = now.getFullYear();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const day = now.getDay();
        const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


        return {
            date: `${weekDays[day]}| ${date}/${month}/${year}`,
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
            <div className="pt-5">
                <div className='row'>
                <div className='col-6 offset-3 date'>
                {date}  
                </div>
                </div>
                <div className='row'>
                <div className='col-6 offset-3 text-white time'>
                {time}    
                </div>
                </div>
                <hr size="30" color="white" /> 
            </div>
        )
    }
};

export default CurrentDateAndTime;