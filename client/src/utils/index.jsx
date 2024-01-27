import { message } from "react-message-popup";
import { useTheContext } from "../context";
import { InitCommand } from "../context";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList =
  window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;


const intialData = ""; 
const colors = [
    "notes",
    "helper",
    "my journey",
    "module",
    "logout",
  ];
const grammar = `#JSGF V1.0; grammar colors; public <color> = ${colors.join(
    " | ",
)};`;
  
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

recognition.onresult = (event) => {
    const command = event.results[0][0].transcript;
    const confidence = event.results[0][0].confidence;
    message.info(command+": "+confidence,1000);
    InitCommand(command);
  };

export {
    intialData,
    recognition,

}