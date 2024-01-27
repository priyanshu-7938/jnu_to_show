import { createContext, useContext, useState } from "react";
import { useTts } from 'tts-react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
// import { TTSHookProps } from 'tts-react'
 
const thisContext = createContext();
let InitCommand;
export default function ContextProvierAllOver({ children }) {
  const Navigator = useNavigate();
  const Navigate = ["module","progress",""];//ading extra curriculeries.
  const fidget = ["ai"];
  const [ token, setToken ] = useState("helo");
  const [ chat, setChat ] = useState([]);
  const [ recentAns, setRecentAns ] = useState("");
  const [ userData, setUserData ] = useState();
  const mainToggleItemsHorizontal = [0, 1, 2, 3, 4];
  const [ textHolder, setTextHolder ] = useState("Initial Text is null");
  const [ mainHorizontalStateIndex, setmainHorizontalStateIndex ] = useState(0);
  const mainTogetterFunction = () => {
    
  }

  //function to make a call to the chatgpt for answere..
  const fetchChat = async (str) => {
    if (str.trim() === '') return;

    // Make a request to the ChatGPT API
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          prompt: str,
          max_tokens: 150,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer MdHRaC8xQNWfEtNtaK9lT3BlbkFJJs6JTULsd6LhFnpxZuky",
          },
        }
      );
      setRecentAns(response.data.choices[0].text);
      setChat([...chat, { text: str, type: 'user' }]);
      setChat([...chat, { text: response.data.choices[0].text, type: 'ai' }]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  }
  InitCommand = (command) => {
    if(Navigate.includes(command)){
      Navigator("/"+command);
      return true;
    }
    else if(fidget.includes(command)){
      if(command == "ai"){
        alert("hello");
      }

      setTextHolder("Thinking....");
      return true;
    }

    fetchChat(command);

    return false;
  }
  const CallBackFunctionForSetting = () => {
    
  }
  const Speak = ({ children }) => (
    <>{useTts( { children, autoPlay: true }).ttsChildren}</>
  )
  return (
    <thisContext.Provider
      value={{
        token, 
        setToken,
        userData, 
        setUserData,
        Speak,
        textHolder,
        setTextHolder,
        InitCommand,
        recentAns,
      }}
    >
      {children}
    </thisContext.Provider>
  );
}

export const useTheContext = () => {
  return useContext(thisContext);
};
export { InitCommand };
