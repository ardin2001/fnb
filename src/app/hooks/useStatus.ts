import { useState } from "react";
export default function useStatus(){
    const [status, setStatus] = useState(false);
    const HandlerStatus = () => {
        setStatus(prev => !prev)
    }

    return [status, HandlerStatus]
}
