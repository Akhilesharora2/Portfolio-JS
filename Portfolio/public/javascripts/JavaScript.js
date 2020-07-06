// File Name: Javascript.js
//Author Name: Akhilesh Arora
//File Desc.: JS file used to change skill set on index/Home page.

var skillList = ["Java", "PHP", "JSP", "Servlets", "MySQL", "IOT", "HTML5", "CSS3", "Javascript", "Bootstrap", "C++", "Data Structures", ".Net using c#"];
var change = 0;
//setTimeout is used to call method after few milliseconds mentioned as 2nd parameter.
setTimeout(skillSet, 3000);

function skillSet() {    
    document.getElementById("skills").innerHTML = skillList[change];    
    change++;
    if (change > 12) {
        change = 0;
    }
    setTimeout(skillSet, 2000);
}