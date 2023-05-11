import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'
import state from '../store'
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from '../config/motion'
import { CustomButton } from '../components'
function home() {
  const snap = useSnapshot(state)

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header>
            {/* <img
              src="./threejs.png"
              alt="logo"
              className="object-contain w-8 h-8"
            ></img> */}
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                DESIGNED
                <br className="hidden xl:block" />
                BY YOU
              </h1>
            </motion.div>
            <motion.div {...headContentAnimation} className="flex flex-col gap-5">
              <p className="max-w-md text-base font-normal text-gray-600">When all that inspiration goes into your design, anything feels possible. Voilà!</p>
              <CustomButton
                type="filled"
                title="Customize It"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"></CustomButton>
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default home
