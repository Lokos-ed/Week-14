import type { FC } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

//Interfaces define the structure of and types an object uses.
interface TitleProps {
  Name: String
  Desc: String
  Ins: String
}
//RCard is a Reaction Functional Component that uses the above titleprops.
const RCard: FC<TitleProps> = ({Name, Desc, Ins}) => {
  return (
  <>
<div className="card text-bg-info mb-3" style={{ minHeight: "500px" }}>
  {/*{name}, {desc}, and {Ins} automatically inserts the passed prop into the component in the html as text.*/}
  <div className="card-header"> {Name}</div>

  <div className="card-body">
    <h5 className="card-title">{Desc}</h5>
    <p className="card-text">{Ins}</p>
  </div>
</div>
  </>
  )
}


export default RCard