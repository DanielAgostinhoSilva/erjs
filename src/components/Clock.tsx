import {useEffect, useState} from "react";

export default function Clock() {
    const [time, setTime] = useState<Date>()

    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        })
    })

    return <div>
        agora: {time?.toLocaleTimeString()}
    </div>
}