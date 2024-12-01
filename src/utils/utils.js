export const formatDate = (date) =>{
    const monthConversion = {
        1:"January",
        2:"Febuary",
        3:"March",
        4:"April",
        5:"May",
        6:"June",
        7:"July",
        8:"August",
        9:"September",
        10:"October",
        11:"November",
        12:"December",
    }
    const dateObj = new Date(date);
    const month = monthConversion[dateObj.getMonth()+1];
    const year = dateObj.getFullYear();
    const day = dateObj.getDate();
    return `${month} ${day}, ${year}`;

}

export const checkFemale = (gender) =>{
    if(gender === "Female"){
        return true;
    }
    return false;
}