import {
  About, Experience, Hero
} from '../../components'

const Home = () => {
  return (
    <div>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <Hero />
      </div>
      <About />
      <Experience />
    </div>
  )
}

export default Home