



function EpochToString(date, maxUnits){

    this.currentDate = date;
        
    this.maxUnits = maxUnits;

    const now = new Date();

    this.now = Math.floor(now.getTime() / 1000);

    this.offset = this.now - this.currentDate;

    this.currentBits = [];

    this.currentValues = {
        "seconds":0,
        "minutes":0,
        "hours":0,
        "days":0,
        "weeks":0,
        "years":0
    };


    this.strings = [
        "year",
        "week",
        "day",
        "hour",
        "minute",
        "second"
    ];

   

    this.setValues = () =>{


        let seconds = this.offset % 60;
        let minutes = (this.offset / 60) % 60;
        let hours = (this.offset / (60 * 60)) % 24;
        let days = (this.offset / ((60 * 60) * 24)) % 7;
        let weeks = (this.offset / (((60 * 60) * 24) * 7)) % 4;
        // const months = (this.offset / ((60 * 60) * 24) * 30.41) % 12;
        let years = (this.offset / ((60 * 60) * 24)) / 365;


        
        seconds = Math.floor(seconds);
        minutes = Math.floor(minutes);
        hours = Math.floor(hours);
        days = Math.floor(days);
        weeks = Math.floor(weeks);
        years = Math.floor(years);

        this.currentValues.seconds = seconds;
        this.currentValues.minutes = minutes;
        this.currentValues.hours = hours;
        this.currentValues.days = days;
        this.currentValues.weeks = weeks;
        this.currentValues.years = years;

        //console.log(this.currentValues);

        if(this.offset < 60){
            return this.offset+" seconds"
        }
    }


    this.setParts = (value, type) =>{

        if(arguments.length === 0){

            this.currentBits = [];
            return;
        }

        if(value != 0){
            this.currentBits.push({"type": type, "value": value});
        }
    }


    this.fixPostFix = (string, value) =>{



        if(string == undefined){
            return "";
        }

        if(value == 1){
            return string;
        }

        if(value != 1){

            const lastChar = string[string.length - 1];

            if(lastChar.toLowerCase() == "s"){

                return string+"'";
            }else{

                return string+"s";
            }
        }
    }

    this.setStrings = () =>{


        let currentIndex = 0;       

        const values = [
            this.currentValues.years,
            this.currentValues.weeks,
            this.currentValues.days,
            this.currentValues.hours,
            this.currentValues.minutes,
            this.currentValues.seconds,
        ];

        while(currentIndex < values.length){

            if(values[currentIndex] != 0){
                this.setParts(values[currentIndex], this.fixPostFix(this.strings[currentIndex], values[currentIndex]));
            }

            currentIndex++;

        }


    }
    

    this.getString = () =>{

        this.setStrings();

        let string = "";

        for(let i = 0; i < this.currentBits.length; i++){

            if(i < this.maxUnits){

                string += this.currentBits[i].value+" "+this.currentBits[i].type;

            }

            if(i < this.maxUnits - 1 && i < this.currentBits.length - 1){
                string += ", ";
            }
        }

        if(this.currentBits.length == 0){
            string = "";
        }

        return string;
    }

    this.setValues();


}