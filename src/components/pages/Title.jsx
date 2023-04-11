import { LetterCanvas, StarsCanvas } from "../canvas"


const Title = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
        <LetterCanvas/>
        <StarsCanvas/>
    </section>
  )
}

export default Title