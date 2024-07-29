import { useState } from "react";
export default function useMessage() {
    const [message, setMessage]:any = useState(false);
    const HandlerMessage = (data :any) =>{
        setMessage(data);
    }
    return [message, HandlerMessage];
}