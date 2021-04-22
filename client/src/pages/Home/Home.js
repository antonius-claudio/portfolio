import React from 'react';
import Style from './Home.module.scss';
import $ from 'jquery';

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
  
  const defResult = ["write your command here...", 'like "hello", "experience", "project", "clear"', "then press 'Enter'"];
  const [result, setResult] = React.useState(defResult);
  const [inputText, setInputText] = React.useState("");
  const [showFocus, setShowFocus] = React.useState(true);

  const onChangeInput = (e) => {
    const afterRegex = e.target.value.replace(/(\r\n|\n|\r)/gm, "").trim();
    setInputText(afterRegex)
  };

  const checkCommand = (command) => {
    if (command === "hello" || command === "experience" || command === "project" || command === "clear") {
      if (command === "clear") setResult(defResult);
      else {
        setResult([ ...result, inputText ]);
      }
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
    $("#input-console").focus();
  };

  return (
    <div className={Style.home}>
      <div className={Style.wrapper}>
        <div className={Style.content}>
          <div className={Style.wrapperDetail} onClick={onClickDetail}>
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