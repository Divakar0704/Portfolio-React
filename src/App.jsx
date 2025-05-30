
import styles from './App.module.css'
import { About } from './componets/About/About'
import { Experience } from './componets/Skills/Skills'
import { Hero } from './componets/Hero/Hero'
import { Navbar } from './componets/Navbar/navbar'
import { Projects } from './componets/Projects/Projects'
import { Contact } from './componets/Contact/Contact'


function App() {
  

  return (
    <><div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
     
    </>
  )
}

export default App
