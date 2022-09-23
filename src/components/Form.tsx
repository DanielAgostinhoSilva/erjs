import {useState} from "react";

export default function Form() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    })

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log(form)
    }


    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    return <form onSubmit={handleSubmit}>
        <input
            placeholder="nome"
            type="text"
            name={"name"}
            value={form.name}
            onChange={handleInputChange}
        />
        <input
            placeholder="e-mail"
            type={'email'}
            name={"email"}
            value={form.email}
            onChange={handleInputChange}
        />
        <input
            placeholder="senha"
            type={'password'}
            name={"password"}
            value={form.password}
            onChange={handleInputChange}
        />
        <button type={"submit"}>Enviar Formulario</button>
    </form>
}