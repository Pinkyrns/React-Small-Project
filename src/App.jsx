import ButtonValue from './Components/Button';
import styles from "./App.module.css"
import { useState } from 'react';
import Display from './Components/Display';
function App() {
  let [textValue, settextValue] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === 'C') {
     settextValue(" ");
    }
    else if (buttonText === '=') {
    let result=eval(textValue);
    settextValue(result);
    }
    else {
      const newValue = textValue + buttonText;
      settextValue(newValue);
    }

  }

  return (
    <>
      <div className={`${styles["Main-Container"]}`}>
        <Display text={textValue}></Display>
        <div className={`${styles["ButtonValue"]}`}>
          <ButtonValue onButtonClick={onButtonClick}></ButtonValue>
        </div>
      </div>

    </>
  )
}
export default App
