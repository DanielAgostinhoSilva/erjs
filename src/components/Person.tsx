import {useState} from "react";

export default function Person() {
    const [person, setPerson] = useState<string>('Daniel')

    setTimeout(() => {
        setPerson((state) => {
            console.log(state)
            return 'Daniel 2'
        })
    }, 2000)

    return <div>
        <h1>Perfil</h1>
        <p>Este e o perfil de {person}</p>
    </div>
}