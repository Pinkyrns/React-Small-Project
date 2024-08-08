import styles from "./Button.module.css"
let ButtonValue = ({onButtonClick}) => {
   let Array = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];
   
    return (
        <div className={`${styles["ButtonSection"]}`}>
            {Array.map((Array) => [ <button className={`${styles["button"]}` }  onClick={()=>{onButtonClick(Array)}} >{Array}</button> ])
            }
        </div>
    )
}
export default ButtonValue;