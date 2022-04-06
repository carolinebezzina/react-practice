export const CurrentTime = () => {

    const today = new Date();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return(
       <span>{weekday[today.getDay()]} {today.getDate()} {month[today.getMonth()]}, {today.getFullYear()}</span>
    )

}

export default CurrentTime