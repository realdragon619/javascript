function dateString(date,string){
    var year=date.getFullYear();
    var month=date.getMonth();
    var realMonth=month+1;
    var fillMonth;
    if(realMonth<10){
        fillMonth='0'+realMonth;
    }else{
        fillMonth=realMonth;   
    }
    
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                  'August', 'September', 'October', 'November', 'December'];
    var monthName = months[month];
    var day=date.getDate();
    var fillDate;
    if(day<10){
        fillDate='0'+day;
    }else{
        fillDate=day;   
    }
    
    var weekday=date.getDay();
    var weekdays= ['Sunday','Monday','Tuseday','Wednesday','Thursday','Friday','Saturday'];
    var dayName=weekdays[weekday];
    
    string = string.replace(/%Y/g,year);
    string = string.replace(/%y/g, year.toString().slice(-2));
    string = string.replace(/%M/g, monthName);
    string = string.replace(/%m/g, monthName.slice(0,3));
    string = string.replace(/%N/g, fillMonth);
    string = string.replace(/%n/g, realMonth);
    string = string.replace(/%W/g, dayName);
    string = string.replace(/%w/g, dayName.slice(0,0));
    string = string.replace(/%D/g, fillDate);
    string = string.replace(/%d/g, day);
    return string;
}