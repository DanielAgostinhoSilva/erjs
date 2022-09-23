import {useState} from "react";

export default function Form() {
    const [name, setName] = useState('Daniel')
    return <div>
        <input
            placeholder="nome"
            type="text"
            value={name}
            onChange={event => setName(event.target.value)}
        />
        <div>
            {name}
        </div>
    </div>
}