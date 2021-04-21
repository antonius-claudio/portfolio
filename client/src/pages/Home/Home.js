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

  const [result, setResult] = React.useState(["isi code loh", "isi code2 loh"]);
  const [inputText, setInputText] = React.useState("");

  const onChangeInput = (e) => {
    // console.log(e.target.value)
    setInputText(e.target.value)
  };

  const detectEnter = (e) => {
    if (e.key === "Enter") {
      setResult([ ...result, inputText ]);
      $("#input-console").removeData();
      setInputText("");
      console.log('after set "')
      setTimeout(() => {
        console.log('inputText', inputText)
      }, 5000)
    }
  };

  const onClickConsole = () => {
    console.log('onclick console')
    $("#input-console").focus();
  };

  return (
    <div className={Style.home}>
      <div className={Style.wrapper}>
        <div className={Style.content}>
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
                />
              </span>
            </div>
            
          </div>
          {/* {photoProfile} */}
          {/* {textProfile} */}
        </div>
      </div>
    </div>
  );
};

export default Home;