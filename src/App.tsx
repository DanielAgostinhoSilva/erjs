import './App.css';

function App() {
    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
    }

    return (
        <div className="App">
            <header className="App-header">
                <form action={'/teste'}>
                    <button onClick={handleClick}>
                        Clique em mim
                    </button>
                </form>
            </header>
        </div>
    );
}

export default App;
