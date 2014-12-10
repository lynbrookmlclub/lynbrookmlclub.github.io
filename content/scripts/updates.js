var updates = [
    {
        "title":"New Website 1.0",
        "date": "December 8th, 2014",
        "content": "She gone shake it. LIke a red nose, like a, like a, like a red nose. Shake it for the dojo and the sensai. I almost got her a house up off King's way. I told her shake it like a red nose pitbull, And I'ma keep throwing. She gone shake it. LIke a red nose, like a, like a red nose. Shake it for the dojo like the sensai. I almost got her a house off King's way. I told her shake it like a red nose pitbull. And I'ma keep throwing She gone shake it. Like a red nose, like a, like a, like a red nose. Shake it for the"
    },
    {
        "title":"New Website 2.0",
        "date": "December 8th, 2014",
        "content": "She gone shake it. LIke a red nose, like a, like a, like a red nose. Shake it for the dojo and the sensai. I almost got her a house up off King's way. I told her shake it like a red nose pitbull, And I'ma keep throwing. She gone shake it. LIke a red nose, like a, like a red nose. Shake it for the dojo like the sensai. I almost got her a house off King's way. I told her shake it like a red nose pitbull. And I'ma keep throwing She gone shake it. Like a red nose, like a, like a, like a red nose. Shake it for the She gone shake it. LIke a red nose, like a, like a, like a red nose. Shake it for the dojo and the sensai. I almost got her a house up off King's way. I told her shake it like a red nose pitbull, And I'ma keep throwing. She gone shake it. LIke a red nose, like a, like a red nose. Shake it for the dojo like the sensai. I almost got her a house off King's way. I told her shake it like a red nose pitbull. And I'ma keep throwing She gone shake it. Like a red nose, like a, like a, like a red nose. Shake it for the"
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
