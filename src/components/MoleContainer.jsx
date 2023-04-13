import { useState } from "react"
import Mole from "./mole"
import Empty from "./Empty"


export default function MoleContainer({ setScore, score }) {
    const [isShowing, setIsShowing] = useState(false)

    const onMoleClick = e => {
        if (isShowing) {
            setScore(score + 1)
            setIsShowing(false)
        }
    }

    return (
        <div className="mole-container">

            {
                 isShowing ?
                 <Mole setIsShowing={setIsShowing} />
                 :
                 <Empty  setIsShowing={setIsShowing}/>
            }
       
        </div>
    )

    }