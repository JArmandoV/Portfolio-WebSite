import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { github, play } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"


const ProjectCard = ({index, name, description,
tags, image, source_code_link, link_demo}) => {
  return(
    <motion.div
    variants={fadeIn("up","spring", index * 0.5, 0.75)}
    >
      <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
      className='bg-tertiary p-5 rounded-2xl
       sm:w-[360px] w-full'
      >
        <div className="relative w-full h-[230px]">
          <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover rounded-2xl"
          />
          
        </div>

        <div className="mt-5">
            <h3 className="text-white font-bold
            text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4">
        <a href={`${link_demo}`} target="_blank" 
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
         hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300
          dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg
           dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
          Demo
        </a>
        <a href={`${source_code_link}`} target="_blank" 
        className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700
         hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300
          dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg
           dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Github
        </a>
        </div>
        

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}

        </div>
      </Tilt>
    </motion.div>
  )

}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mt-8">
        <p className={styles.sectionSubText}>
          My work
        </p>
        <h2 className={styles.sectionHeadText}>
         Projects
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
        variants={fadeIn("","", 0.1, 1)}
        className="mt-3 text-secondary text-[17px]
        max-w-3xl leading-[30px]"
        >
        Following projects showcases my skills and
         experienced through real-world examples
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
          key={`product-${index}`}
          index={index}
          {...project}
          />
          ))}
      </div>

    </>
  )
}

export default SectionWrapper(Works, "work")