var updates = [
    {
        "title":"Passed by Leg Council!",
        "date": "November 4th, 2014",
        "content": "Aw yeah. Today, our club proposal was passed by the legislative council. Lynbrook Web Dev is officially in business (as soon as next semester arrives)! Thank you to the 70+ people who filled out our interest form earlier in the month. Together, you played a huge role in getting this club started, and we are so excited to get all of you started on some code. Organization is currently underway and more information and details will be posted soon. Do not fear. All shall soon become clear."
    },
    {
        "title":"Updated Website",
        "date": "December 8th, 2014",
        "content": "'She gone shake it. Like a red nose, like a, like a, like a red nose...' The original one-page Lynbrok Web Dev website has been updated into the full-feature, responsive site, which includes a calendar of (tentative) meeting times, this updates page, officer biographies, and a link to the soon-to-be-filled Github Repo of lesson presentations and resources. Lesson planning is underway, and - as soon as the website is debugged and finalized - a massive club launch will utterly shatter Facebook. Nah. Just be on the look out for a few posts about the start of the club."
    },
    {
        "title":"First Meeting",
        "date": "December 18th, 2014",
        "content": "AT LAST, the time has come for this club to commence. The first Lynbrook Web Dev meeting will take place on Tuesday, January 13 at lunch in room 608. This first meeting will be quick and purely informational, so no need to bring anything. We'll be giving an overview of our plans for the semester as well as instructions for each of you as members. After we get this informational meeting out of the way, we will begin fun stuff the following week. For now, make sure to come out to our first meeting!"
    },
    {
        "title":"CAML Takeover",
        "date": "February 4, 2015",
        "content": "Due to the CAML taking place in room 608 on Tuesday, February 10, we will not be having a member meeting. See you all after the break! If you ever need to look at any of the resources, just look through our presentations in the Resources section of our website."
    },
    {
        "title": "New Year, New Update!",
        "date": "August 27, 2016",
        "content": "It's finally the new school year, and we're pumped to start the third year of Web Dev Club! Check out our Club Info Day booth on Thursday, 9/1 for more info."
    },
    {
        "title": "Never 2 Late for an Update",
        "date": "September 5, 2018",
        "content": "It's Club Info Day once again...two years later! Thanks for coming by our website. If you want to stay updated for our first meeting and haven't signed up at our booth today, sign up on our interest list linked on the 'Home' page. You'll then receive an exciting survey after."
    }
];


var section, article, info, updatetitle, updatetitlecontent, date, datecontent, text, textcontent;
section = document.createElement("section");
section.setAttribute("id","updates");
document.getElementById("content-container").appendChild(section);
for(var i = updates.length-1; i>=0; i--) {
    article = document.createElement("article");
    info = document.createElement("section");
    info.setAttribute("class","update-info");
    updatetitle = document.createElement("h1");
    updatetitlecontent = document.createTextNode(updates[i].title);
    updatetitle.appendChild(updatetitlecontent);
    date = document.createElement("h2");
    datecontent = document.createTextNode(updates[i].date);
    date.appendChild(datecontent);
    info.appendChild(updatetitle);
    info.appendChild(date);
    text = document.createElement("p");
    textcontent = document.createTextNode(updates[i].content);
    text.appendChild(textcontent);
    article.appendChild(info);
    article.appendChild(text);
    section.appendChild(article);
}
