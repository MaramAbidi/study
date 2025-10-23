<<<<<<< HEAD
import React from 'react';
import Timer from './Timer';
import UserList from './UserList';
import { ThemeProvider } from './ThemeContext';
import { UserProvider } from './context/UserContext';
import UserProfile from './components/UserProfile';
import Notifications from './components/Notifications';
import NotificationCounter from './components/NotificationCounter';

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <div style={{ fontFamily: 'Arial', padding: 20 }}>
          <h1>🧠 TP React - Hooks (useState, useEffect, useContext)</h1>

          <section style={{ marginTop: 20 }}>
            <h2>Exercice 1 — Timer (useEffect)</h2>
            <Timer />
          </section>

          <section style={{ marginTop: 20 }}>
            <h2>Exercice 2 — Thème (useContext)</h2>
            <p>Le theme couvre l'app (provider). Utilise le bouton pour basculer.</p>
          </section>

          <section style={{ marginTop: 20 }}>
            <h2>Exercice 3 — Appel API (useEffect)</h2>
            <UserList />
          </section>

          <hr style={{ margin: '20px 0' }} />

          <section>
            <h2>TP — Profil Utilisateur et Notifications</h2>
            <UserProfile />
            <Notifications />
            <NotificationCounter />
          </section>
        </div>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
>>>>>>> c6eff6428b81d536d00a489ae08a77b285d9bcb4
