// to get datetime
export function datetime(timestring = null){

    let dateObj = (!timestring || timestring === '') ? new Date():new Date(Date(timestring));
    return `${dateObj.getFullYear()}-${dateObj.getMonth()}-${dateObj.getDate()} ${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}`;

}


// to make '2022-01-08' to '08th January
export function beautifyDateStr(date){

    let months = ['January','February','March','April','May','Jun','July','August','September','October','November','December'];

    let dateArr = date.split('-');

    let day = dateArr[2];

    if(day.split('')[0] == '0'){ day = day.replace('0', ''); }

    let month = months[dateArr[1]];
    let year = dateArr[0];

    if(day == '1' || day[1] == '1'){ day += 'st'; }
    else if(day == '2' || day[1] == '2'){ day += 'nd'; }
    else if(day == '3' || day[1] == '3'){ day += 'rd'; }
    else{ day += 'th'; }

    return `${day} ${month}, ${year}`;

}


// to beautify date-time strings
export function beautifyDateTimeStr(dateTime, onlyDate = false){
        
    if( dateTime.split(' ').length > 1 ){

        let date = beautifyDateStr( dateTime.split(' ')[0].trim() );
        let timeStr = dateTime.split(' ')[1].trim();

        let hour = parseInt(timeStr.split(':')[0]);
        let min = timeStr.split(':')[1].trim();

        let suffix = (hour < 12) ? 'AM':'PM';
        
        hour = (hour <= 12) ? hour:(hour - 12);
        
        dateTime = (!onlyDate) ? `${date} ${hour}:${min} ${suffix}` : date;

        return dateTime;

    }else{

        return beautifyDateStr( dateTime );

    }

}


