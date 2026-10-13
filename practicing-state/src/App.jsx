import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Name from './Name.jsx';

function App() {
    const fullName = {
        fName: "Josh",
        lName: "Archer",
        middle: "B",
        nickname: "Pounce"
    }

    return <Name {...fullName} />
} 

export default App
