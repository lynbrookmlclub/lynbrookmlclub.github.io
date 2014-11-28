var events = [
    {
      "name": "Test Meeting 2",
      "start-month": "11",
      "start-date": "26",
      "start-year": "2014",
      "start-time": "22:00",
      "end-month": "11",
      "end-date": "26",
      "end-year": "2014",
      "end-time": "23:00",
      "location": "Room 608"
    },
];
var firstDate;

function getRowNumber(year, month) {
  var rowNumber = 0;
  var daysInMonth = new Date(year, month, 0).getDate();
  firstDate = new Date(year, month, 1);
  switch(daysInMonth) {
    case 28:
      rowNumber = (firstDate.getDay()==0) ? 4 : 5;
      break;
    case 29:
      rowNumber = 5;
      break;
    case 30:
      rowNumber = (firstDate.getDay()==6) ? 6 : 5;
      break;
    case 31:
      rowNumber = (firstDate.getDay()>4) ? 6 : 5;
      break;
  }
  return rowNumber;
}

function loadCalendar() {
  var rows;

  var currentDate = new Date();
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var heading = document.getElementById("heading");
  heading.textContent = months[currentDate.getMonth()-1] + " " + currentDate.getFullYear();
  console.log(getRowNumber(currentDate.getFullYear(), currentDate.getMonth())+"");

}
loadCalendar();
