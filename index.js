function shout (string) {
    return string.toUpperCase();
}
"Hello".toUpperCase

function whisper(string) {
    return string.toLowerCase();
}
"Hello".toLowerCase

function logShout(string) {
    console.log(string.toUpperCase())
    "hello".toUpperCase();
}
function logWhisper(string) {
    console.log(string.toLowerCase())
    "hello".toLowerCase();
}


function sayHiToGrandma(string) {

    let reply

    if (string.toLowerCase() === string){ 
        reply = "I can\'t hear you!"

    } if (string.toUpperCase() === string) {
        reply = "YES INDEED!"

    } if (string === "I love you, Grandma."){
        reply = "I love you, too."
    }


return reply
   
}
