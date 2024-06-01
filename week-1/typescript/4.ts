/**
 * Write a function to display the current date and time in the format
 * 'MM-DD-YYYY HH:MM:SS'.
 * @return {string} The current date and time in the format 'MM-DD-YYYY HH:MM:SS'.
 */


function CurrentDate(){
    const date : Date = new Date();
    const month = date.getMonth();
    const day = date.getDay();
    const year= date.getFullYear();

    const hours=date.getHours();
    const minutes=date.getMinutes();
    const seconds=date.getSeconds();

    const CurrentDateFormat: string = `${month} - ${day} - ${year}  ${hours}: ${minutes}: ${seconds}` 

    console.log(CurrentDateFormat)
}

CurrentDate();