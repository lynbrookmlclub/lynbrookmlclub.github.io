$(document).ready(function(){
  $('#calendar').fullCalendar({
    events: [
        {
            title  : 'event1',
            start  : '2014-11-01'
        },
        {
            title  : 'event2',
            start  : '2014-11-05',
            end    : '2014-11-07'
        },
        {
            title  : 'event3',
            start  : '2014-11-09T12:30:00',
            allDay : false // will make the time show
        }
    ]
  });
});
