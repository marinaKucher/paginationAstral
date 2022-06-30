import months from "../arrMonths";

function getCurrentDate(id){
    let date= new Date();
    date.setDate(date.getDate() + id);
    let dateOfCreation;
    dateOfCreation = String(date.getDate()) +" " + months[date.getMonth()] +" "+ date.getFullYear();  //+ '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
    return  dateOfCreation;
}
export default getCurrentDate