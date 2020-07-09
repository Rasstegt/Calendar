/*
  Name: Arslan Khalikov
  E-mail: khalikov@sheridancollege.ca
  Date: July 4, 2020
  Description: Object class of Calendar that will be used in main.js for getting and setting important values
*/

class Calendar
{
    // to initialize Calendar constructor
    constructor(year, month, date)
    {
        if(arguments.length == 3){
            this.year = year.getFullYear();
            this.month = month.getMonth() + 1;
            this.date = date.getDate();

        } else {
            this.time = new Date(Date.now());       
            this.year = this.time.getFullYear();    
            this.month = this.time.getMonth() + 1;  
            this.day = this.time.getDay() + 1;      
            this.date = this.time.getDate();
        }
            
    }

    getDaysOfMonth()
    {
        return new Date(this.year, this.month, 0).getDate();
    }

    getFirstDayOfMonth()
    {
        return new Date(this.year, this.month-1, 1).getDay() + 1;
    }

    getLastDayOfMonth()
    {
        return new Date(this.year, this.month, 0).getDay() + 1;
    }

    getLastDateOfPreviousMonth()
    {
        return new Date(this.year, this.month-1, 0).getDate();
    }

    getMonthString(x) {
        switch(this.month + x) {
            case 0: return "December";  // between new year
            case 1: return "January";
            case 2: return "February";
            case 3: return "March";
            case 4:  return "April";
            case 5:  return "May";
            case 6:  return "June";
            case 7:  return "July";
            case 8:  return "August";
            case 9:  return "September";
            case 10: return "October";
            case 11: return "November";
            case 12: return "December";
            case 13: return "January";  // between new year
        }
    }

    getDayString()
    {
        switch(this.day)
        {
            case 1:  return "Sunday";
            case 2:  return "Monday";
            case 3:  return "Tuesday";
            case 4:  return "Wednesday";
            case 5:  return "Thursday";
            case 6:  return "Friday";
            case 7:  return "Saturday";
        }
    }

    set(year, month, date){
        this.time = new Date(year, month, date);
        this.year = this.time.getFullYear();
        this.month = this.time.getMonth();
        this.date = this.time.getDate();
        this.day = this.time.getDay();
    }

    setYear(year){
        this.set(year, this.month, this.date);
    }

    setDate(date){
        this.set(this.year, this.month, date);
    }

    setMonth(month){
        
        this.month = month;
        if(this.month === 0){
            this.setYear(this.year);
            this.month = 12;
        } else if(this.month === 13){
            this.setYear(this.year);
            this.month = 1;
        }
        
        if(month != new Date(Date.now()).getMonth() + 1){
            this.date = 0;
        } else {
            if(this.year == new Date(Date.now()).getFullYear())
            this.date = new Date(Date.now()).getDate();
        }
    }
}