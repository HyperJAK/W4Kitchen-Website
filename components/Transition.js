//framer motion import
import {motion} from 'framer-motion'

//variants
const transitionVariants = {
  initial: {
    x: '100%',
    width: '100%',
  },
  animate: {
    x: '0%',
    width: '0%',
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
  },
}

const Transition = () => {
  return (
    <>
      <motion.div
        className={'fixed bottom-0 right-full top-0 z-30 h-screen bg-primary'}
        variants={transitionVariants}
        initial={'initial'}
        animate={'animate'}
        exit={'exit'}
        transition={{delay: 0.2, duration: 0.6, ease: 'easeInOut'}}>
        {/*Maybe put an icon here*/}
      </motion.div>
      <motion.div
        className={'z-29 fixed bottom-0 right-full top-0 h-screen bg-accent'}
        variants={transitionVariants}
        initial={'initial'}
        animate={'animate'}
        exit={'exit'}
        transition={{delay: 0.4, duration: 0.6, ease: 'easeInOut'}}>
        {/*Maybe put an icon here*/}
      </motion.div>
      <motion.div
        className={'z-28 fixed bottom-0 right-full top-0 h-screen bg-accent'}
        variants={transitionVariants}
        initial={'initial'}
        animate={'animate'}
        exit={'exit'}
        transition={{delay: 0.6, duration: 0.6, ease: 'easeInOut'}}>
        {/*Maybe put an icon here*/}
      </motion.div>
    </>
  )
}

export default Transition
