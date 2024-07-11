// Initialize button with user’s preferred color
let newPhrase = document.getElementById("newPhrase");
chrome.storage.sync.get("color", ({ color }) => {
newPhrase.style.backgroundColor = color;
});
//URL is fine;
fetch('https://techy-api.vercel.app//json')
    .then((data) => data.json())
    .then((data) => console.log(data))
//use the api to get a random phrase and assign it to a variable
    //fetch 
    //console.log to see what it returns 
//set that phrase as the innerHTML for the buttom


// fetch('https://ohwuvawrw4.execute-api.us-west-2.amazonaws.com/messages')
//     .then((data) => data.json())
//     .then((data) => {
//       //data is an array of objects => each object contains the message, time, and sender
//       data.forEach((obj) => {
//         //use object functionality to loop through the arrays of objects
//         const newMessage = document.createElement('li');
//         newMessage.setAttribute('class', 'texts');
//         newMessage.textContent = `Message: ${obj.message}`;
//         newMessage.style.fontSize = '12px';
//         messageList.appendChild(newMessage);

//         const sender = document.createElement('li');
//         sender.setAttribute('class', 'sender');
//         sender.textContent = `Sent by: ${obj.created_by} at ${obj.created_at}`;
//         sender.style.fontSize = '8px';
//         sender.style.color = 'gray';
//         messageList.appendChild(sender);
//       });
//       //do whatever with its style
//       console.log(data);
//     });
// });

module.exports = async (req, res) => {

    let rawArr =
    "linear resistance hard-wired suppression intermittent flow hard-wired distortion hard-wired inductance power fusion storage flow utility inductance analog distortion field modulation memory refraction external interface hard-wired alignment power capacity storage velocity amplitude alignment utility resistance opaque anomalies power adapter intermittent velocity virtual fusion temporal inductance non-linear adapter power deviation phased impedance thermal resistance phased adapter field mis-match secondary flow temporal inductance analog fusion power mis-match traffic fiber digital resistance virtual interface intermittent losses non-linear losses amplitude interface traffic velocity hard-wired fusion intermittent cohesion linear suppression external suppression phased refraction secondary adapter spatial fragmentation spatial coupling virtual alignment storage redirection linear refraction hard-wired velocity external flow thermal refraction power fiber digital flow revenue impedance intermittent anomalies power inductance flux resistance external fragmentation secondary anomalies spatial heirarchy storage fragmentation virtual cohesion intermittent losses secondary cohesion field index intermittent losses utility velocity flux modulation traffic fusion internal fusion traffic deviation revenue reduction secondary suppression external adapter non-linear fiber storage velocity thermal velocity secondary anomalies revenue inductance thermal resistance thermal modulation analog deviation power interface analog reduction storage losses field fragmentation utility interface phased anomalies external inductance phased fiber revenue suppression traffic suppression external coupling spatial fragmentation power suppression internal losses field inductance internal modulation";
    
    let wordArr = rawArr.split(" ");
    
    let phraseArr = [
      "You have to fix the",
      "I should really get to fixing the",
      "The hardest part was setting the",
      "I only had an error while configuring the",
      "I spent a lot of time setting up the",
      "You should really get to fixing the",
      "It was very hard doing the",
      "The easiest part was configuring the",
      "I was only stuck where you had to hash the",
      "I am almost done configuring the",
      "All you have to do is hash the",
      "Just use cryptography on the",
      "All you gotta do is properly set the",
      "Its the part where you had to hash",
      "Just edit the config file for the",
      "Make sure to set the parameters for",
      "You have to make sure to set the algorithm right for the",
      "Make sure to modulate the",
      "Just gotta finishing setting interface for the",
    ];
    
    let randomWord = Math.floor(Math.random() * wordArr.length);
    let randomPhrase = Math.floor(Math.random() * phraseArr.length);
      
    let phrase = phraseArr[randomPhrase] + " " + wordArr[randomWord] + " " + wordArr[Math.floor(Math.random() * wordArr.length)];
    
    res.send(phrase)
    }

