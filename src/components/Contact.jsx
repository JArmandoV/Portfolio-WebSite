import { useState, useRef } from "react"
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


//'',  
const Contact = () => {
  const formRef = useRef()

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    emailjs.send(
      'service_oatoc1d',
      'template_cbqdle3',
      {
        from_name: form.name,
        to_name: 'Armando',
        from_email: form.email,
        to_email: 'armandovaldez.software@gmail.com',
        message: form.message,
      },
      '-GU5_Pg-TPu1RECbJ'
    )
      .then(() => {
        setLoading(false)
        toast.success('Thank you. I will get back to you as soon as posible! 🤗', {
          position: "bottom-right",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }, (error) => {
        setLoading(false)
        console.log(error)

        toast.error('Something went wrong! 😓', {
          position: "bottom-right",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse
    flex gap-10 overflow-hidden">
      <ToastContainer
        position="bottom-right"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {/* Name form */}
          <label className="flex flex-col">
            <span className="text-white font-medium
            mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="what's your name?"
              className="bg-tertiary py-4 px-6
            placeholder:text-secondary text-white
            rounded-lg outlined-none border-none font-medium"
            >
            </input>
          </label>

          {/* email form */}
          <label className="flex flex-col">
            <span className="text-white font-medium
            mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="what's your email?"
              className="bg-tertiary py-4 px-6
            placeholder:text-secondary text-white
            rounded-lg outlined-none border-none font-medium"
            >
            </input>
          </label>

          {/* message form */}
          <label className="flex flex-col">
            <span className="text-white font-medium
            mb-4">Your Message</span>
            <textarea
              rows='7'
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="what do you want to say?"
              className="bg-tertiary py-4 px-6
            placeholder:text-secondary text-white
            rounded-lg outlined-none border-none font-medium"
            >
            </textarea>
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none
          w-fit text-white font-bold shadow-md shadow-primary
          rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px]
       h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
      
    </div>
  )
}

export default SectionWrapper(Contact, "contact")