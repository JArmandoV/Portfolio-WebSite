import {
  About, Experience, Hero
} from '../../components'

const Home = () => {
  return (
    <div className=" bg-primary">
      <div className='relative z-0 bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <Hero />
      </div>
      <About />
      <Experience />
    </div>
  )
}

export default Home