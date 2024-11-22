
import { AccordionCustom } from "../CharFunctions";
import { accordionItems } from "./aboutData";




export default function About(){
    return(
        <div className="flex justify-center mt-20">
            
    <div className="w-10/12">
    <h3
          className="text-center text-3xl mt-10"
          style={{ fontFamily: "IM-Fell" }}
        >
          About Curse of the Secret Pools!
        </h3>
        <br/><br/>
       <AccordionCustom accordionItems={accordionItems} />
    </div>
    </div>
    )
}