let btn = document.querySelector('.btn')
let content = document.querySelector('#content')

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang = 'EN-GB'
    window.speechSynthesis.speak(text_speak)
}
function wishMe() {
    let day = new Date()
    let hour = day.getHours()

    if (hour >= 4 && hour < 10) {
        speak("Good Morning sir")
    } else if (hour >= 10 && hour < 16) {
        speak("Good Afternoon sir")
    } else {
        speak("Good Evening sir")
    }
}
window.onload = function () {
    wishMe();
}

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
    takeCommand(transcript.toLowerCase)
}

btn.addEventListener("click", () => {
    recognition.start()

})

function takeCommand(message) {
    if (message.includes('hello') || message.includes('hey') || message.includes('hii') || message.includes("hey") || message.includes("hello si")) {
        speak('Hello sir, what can i help you?')
    }
    else if (message.includes("who are you") || message.includes("hu r u")) {
        speak("i am sifra a virtual assistant, created by Sudhanshu Gaurav")
    }
    else if (message.includes('Open youtube')) {
        speak('opening youtube...')
        window.open('http://www.youtube.com')
    }
    else if (message.includes('Open google')) {
        speak('opening google...')
        window.open('http://www.google.com')
    }
    else if (message.includes('Open facebook')) {
        speak('opening facebook...')
        window.open('http://www.facebook.com')
    }
    else if (message.includes('Open instagram')) {
        speak('opening instagram...')
        window.open('http://www.instagram.com')
    }
    else if (message.includes('Open calendar')){
        speak('opening calendar...')
        window.open('calendar://')
    }
    else if (message.includes('Open calculator')){
        speak('opening calculator...')
        window.open('calculator://')
    }
    else if (message.includes('Open visual studio code')||message.includes('Open v s code')){
        speak('opening visual studio code...')
        window.open('visual studio code://')
    }
    else {
        let finalText = "this is what i found on internet regarding" + message.replace("sipra", "") || message.replace("sifra", "")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("sipra", "") || message.replace("sifra", "")}`, "_blank")
    }

}




