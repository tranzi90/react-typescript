import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Todos from './pages/Todos'
import About from './pages/About'

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="container">
                <Switch>
                    <Route component={Todos} path="/" exact />
                    <Route component={About} path="/about" />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App
