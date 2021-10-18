import React from 'react';
import Style from './Home.module.scss';
import $ from 'jquery';
import { Hello } from '../../components/Hello/Hello';
import { Education } from '../../components/Education/Education';
import { Experience } from '../../components/Experience/Experience';
import { Portfolio } from '../../components/Portfolio/Portfolio';
import { Opening } from '../../components/Opening/Opening';
import { Contact } from '../../components/Contact/Contact';

const Home = (props) => {
  const photo = '/diocartoon.png';
  
  React.useEffect(() => {
    const { checkPage, location } = props;
    const { pathname } = location;
    checkPage(pathname);
  }, []);

  const photoProfile =
    <div className={Style.photo}>
      <img alt='Claudio Antonius' src={photo}/>
    </div>
  ;

  const textProfile =
    <div className={Style.text}>
      <div className={Style.highlight}>Hi,</div>
      <div className={Style.name}>i'am <span className={Style.highlight}>Claudio Antonius</span></div>
      <p>a Full Stack Developer, who can help you to create a website or application in accordance with your imagination.</p>
    </div>
  ;
  
  const defResult = ["write your command here...", 'like "hello", "education",', '"experience", "portfolio",', '"contact", "clear"', "then press 'Enter'"];
  const [result, setResult] = React.useState(defResult);
  const [inputText, setInputText] = React.useState("");
  const [showFocus, setShowFocus] = React.useState(true);
  const [cmd, setCmd] = React.useState("");

  const onChangeInput = (e) => {
    const afterRegex = e.target.value.replace(/(\r\n|\n|\r)/gm, "").trim();
    setInputText(afterRegex)
  };

  const checkCommand = (command) => {
    if (command === "hello" || command === "education" || command === "experience" || command === "portfolio" || command === "contact" || command === "clear") {
      if (command === "clear") setResult(defResult);
      else setResult([ ...result, inputText ]);
      setCmd(inputText);
    } else {
      setResult([ ...result, "wrong command!" ]);
    }
  };

  const detectEnter = (e) => {
    if (e.key === "Enter") {
      checkCommand(inputText);
      $("#input-console").val("");
    }
  };

  const onClickDetail = () => {
    setShowFocus(false);
  };

  const onClickConsole = () => {
    setShowFocus(true);
  };

  React.useEffect(() => {
    if (showFocus)
      $("#input-console").focus();
  }, [showFocus])

  const content = () => {
    const payload = {
      
    };

    if (cmd === "hello") return <Hello />;
    if (cmd === "education") return <Education />;
    if (cmd === "experience") return <Experience />;
    if (cmd === "portfolio") return <Portfolio />;
    if (cmd === "contact") return <Contact />;
    return <Opening />;
    // return <Portfolio />;
  };

  return (
    <div className={Style.home}>
      <div className={Style.wrapper}>
        <div className={Style.content}>
          <div className={Style.wrapperDetail} onClick={onClickDetail}>
            {content()}
          </div>
          <div className={Style.wrapperConsole}>
            <div className={Style.console} onClick={onClickConsole}>
              {
                result.map(paragraf => <pre>{paragraf}</pre>)
              }
              <div className={Style.inputView}>
                {inputText}
                <span>
                  <textarea 
                    id="input-console" 
                    onChange={onChangeInput}
                    maxLength="20" 
                    onKeyPress={detectEnter}
                    autoFocus
                  />
                  {showFocus && <span className={Style.cursorText}>|</span>}
                </span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;