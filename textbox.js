





window.urlToVisit = "";


var redditCheck = new RegExp("^/r");
var githubCheck = new RegExp("^/git$");
var fbCheck = new RegExp("^/fb$");
var vCheck = new RegExp("^/v/$");
var gCheck = new RegExp("^/g/$");
var acCheck = new RegExp("^/ac$");
var apexCheck = new RegExp("^/apex$");
var voipCheck = new RegExp("^/voip$");
var youtubeCheck = new RegExp("^/yt");
var bCheck = new RegExp("^/b/$");


var evernoteCheck = new RegExp("^/note$");
var huluCheck = new RegExp("^/hulu$");
var netflixCheck = new RegExp("^/flix$");
var wellsfargoCheck = new RegExp("^/wf$");
var kimcartoonCheck = new RegExp("^/kc$");
var kissanimeCheck = new RegExp("^/ka$");


window.redditURL = "https://reddit.com";
window.githubURL = "https://github.com";
window.fbURL = "https://facebook.com";
window.vURL = "https://4chan.org/v/";
window.gURL = "https://4chan.org/g/";
window.acURL = "https://https://wte.accelerasolutions.com/Timesheet";
window.apexURL = "https://myapex.apexsystemsinc.com/";
window.voipURL = "https://maxvoice.vantageip.com";
window.googleURL = "https://www.google.com/search?q=";
window.youtubeURL = "https://youtube.com/";
window.bURL = "https://boards.4chan.org/b/";

window.evernoteURL = "https://evernote.com";
window.huluURL = "https://hulu.com";
window.netflixURL = "https://netflix.com";
window.wellsfargoURL = "https://wellsfargo.com";
window.kimcartoonURL = "https://kimcartoon.me";
window.kissanimeURL = "https://kissanime.ru";


function textSubmit() {
//  alert ("pressing enter works");
  document.getElementById("textbox");

  var inputBoxText = document.getElementById("textbox").value;
  var goToReddit = redditCheck.test(inputBoxText);
  var goToGithub = githubCheck.test(inputBoxText);
  var goToFB = fbCheck.test(inputBoxText);
  var goToV = vCheck.test(inputBoxText);
  var goToG = gCheck.test(inputBoxText);
  var goToAC = acCheck.test(inputBoxText);
  var goToApex = apexCheck.test(inputBoxText);
  var goToVoip = voipCheck.test(inputBoxText);
  var goToYoutube = youtubeCheck.test(inputBoxText);
  var goToB = bCheck.test(inputBoxText);


  var goToEvernote = evernoteCheck.test(inputBoxText);
  var goToHulu = huluCheck.test(inputBoxText);
  var goToNetflix = netflixCheck.test(inputBoxText);
  var goToWellsfargo = wellsfargoCheck.test(inputBoxText);
  var goToKimcartoon = kimcartoonCheck.test(inputBoxText);
  var goToKissanime = kissanimeCheck.test(inputBoxText);


  if (goToReddit){
    /*window.urlToVisit = redditURL.concat(inputBoxText);*/
    document.location.replace(window.urlToVisit);
    return false;
      } else if (goToYoutube){
    var searchQueryText = inputBoxText.substr(4);
    window.urlToVisit = youtubeURL.concat(searchQueryText);
    document.location.replace(window.urlToVisit);
      } else if (goToGithub){
    document.location.replace(githubURL);
    return false;
      } else if (goToFB){
    document.location.replace(fbURL);
    return false;
      } else if (goToV){
    document.location.replace(vURL);
    return false;
      } else if (goToG){
    document.location.replace(gURL);
    return false;
      } else if (goToAC){
    document.location.replace(acURL);
    return false;
      } else if (goToApex){
    document.location.replace(apexURL);
    return false;
      } else if (goToVoip){
    document.location.replace(voipURL);
    return false;
      } else if (goToB){
    document.location.replace(bURL);
    return false; 
      } else if (goToEvernote){
    document.location.replace(evernoteURL);
    return false;
      } else if (goToHulu){
    document.location.replace(huluURL);
    return false;
      } else if (goToNetflix){
    document.location.replace(netflixURL);
    return false;
      } else if (goToWellsfargo){
    document.location.replace(wellsfargoURL);
    return false;
      } else if (goToKimcartoon){
    document.location.replace(kimcartoonURL);
    return false;
      } else if (goToKissanime){
    document.location.replace(kissanimeURL);
    return false;
      } else {
    window.urlToVisit = googleURL.concat(inputBoxText);
    document.location.replace(window.urlToVisit);
    return false;

  }



}




function textUpdate() {
var inputBoxText = document.getElementById("textbox").value;
var goToReddit = redditCheck.test(inputBoxText);
var goToGithub = githubCheck.test(inputBoxText);
var goToFB = fbCheck.test(inputBoxText);
var goToV = vCheck.test(inputBoxText);
var goToG = gCheck.test(inputBoxText);
var goToAC = acCheck.test(inputBoxText);
var goToApex = apexCheck.test(inputBoxText);
var goToVoip = voipCheck.test(inputBoxText);
var goToYoutube = youtubeCheck.test(inputBoxText);
var goToB = bCheck.test(inputBoxText);




if (goToReddit){
  console.log ("regex detected /r/, will load reddit");
}

if (goToGithub){
  console.log ("regex detected /git, will load github");
}
}




/*
        switch (inputBoxText) {
            case "test1":
                console.log("hello world")
                break
            case "test2":
                console.log("hey mate")
                break
            case "/r/":
                console.log("reddit time")
                urlToVisit = "https://reddit.com"
                break
            default:
                console.log (inputBoxText);
                urlToVisit = "";
        }
        
    }
*/




/*    function textSubmit() {
      switch (currentFunction) {
        case "reddit":
        document.location.replace("https://reddit.com" + inputBoxText);
        break
      default:
        alert("nothing");
      }
*/








