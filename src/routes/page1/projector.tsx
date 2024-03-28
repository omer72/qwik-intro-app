import type { Signal} from "@builder.io/qwik";
import { Slot, component$, useContext} from "@builder.io/qwik";
import { projectorContextId } from "../projector-ocntext-id";

interface Props{
    
    colorSignal:Signal<string>
}

export const Projector = component$(({ colorSignal}:Props)=>{
   
    const typeText = useContext(projectorContextId);
    
    return (<div><Slot/><div style={{color:colorSignal.value}}>{typeText}</div></div>)
})

