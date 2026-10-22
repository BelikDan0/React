import { Route, Routes } from 'react-router-dom'
import { ProfileProvider } from './context/profileContext'
import { PostsProvider } from './context/postContext'
import { useState } from 'react'
import { useTheme } from './context/ThemeContext'
import './App.css'
import AboutProject from './pages/AboutProject'
import Header from "./components/Header"
// import ProfileCard from "./components/ProfileCard"
import Home from './pages/Home'
import Profile from './pages/Profile'
import Settings from './pages/Settings'

function App() {
  // const [count, setCount] = useState(0)
  const {theme}=useTheme()
  return (
    <div className={`app theme-${theme}`}>
      <Header />
      <main>
        <PostsProvider>
          <ProfileProvider>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/about' element={<AboutProject />} />
            </Routes>
          </ProfileProvider>
        </PostsProvider>
      </main>
    </div>
  )
}

export default App
