import React from 'react';
import './App.css';

function App() {
    return (
        <div className = "app-wrapper">
            <header className = "header">
                <img
                    src = "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?semt=ais_hybrid&w=740"
                    alt = "logo"/>
            </header>
            <nav className = "nav">
                <div><a href = "">Profile</a></div>
                <div><a href = "">Messages</a></div>
                <div><a href = "">News</a></div>
                <div><a href = "">Musics</a></div>
                <div><a href = "">Settings</a></div>
            </nav>
            <div className = {'content'}>
                <div>
                    <img
                        src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&s"
                        alt = ""/>
                </div>
                <div>ava+description</div>
                <div>my posts
                    <div>new posts</div>
                    <div>
                        <div>post1</div>
                        <div>post2</div>
                        <div>post3</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
