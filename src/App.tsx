import React, {useState} from 'react';
import './App.css';
import Post from "./components/Post";
import SideBar from "./components/SideBar";
import Card from "./components/Card";

function App() {

    const [post] = useState({
        title: 'Titulo maneiro',
        content: 'Lorem Ipsum dolor sit amet'
    })

    return (
        <div className="App">
            <header className="App-header">
                <Card title={'card'}>
                    <Post post={post} totalComments={12}/>
                </Card>
            </header>
        </div>
    );
}

export default App;
