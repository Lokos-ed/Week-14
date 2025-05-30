import type { FC } from "react"

//Interfaces define the structure of and types an object uses.
interface TitleProps {
  PH: string
  ID: string
}
//RCard is a Reaction Functional Component that uses the above titleprops.
const InputBox: FC<TitleProps> = ({ PH, ID }) => {
return (
  <>
  {/*{PH} is passed to be the input box's placeholder text and {ID} is passed to be the object's HTML ID. The id is so that the specific instance can be found when the submit button is pressed.*/}
   <input type="text" placeholder={PH} id={ID}/>
    
  </>

)
}

export default InputBox