import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [names, setNames] = useState(['Daniel', 'Thiago', 'Alex'])

    useEffect(() => {
        console.log('componente foi montado')

        return () => {
            console.log('componente foi desmontado')
        }
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <ul>
                    {
                        names.map((name, index) => <li key={index}>{name}</li>)
                    }
                </ul>

            </header>
        </div>
    );
}

export default App;
