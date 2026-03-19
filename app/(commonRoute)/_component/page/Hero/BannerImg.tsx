"use client";
import Image from "next/image";
import carImg from "../../../../../public/assets/hero-car.svg"
import { motion } from "motion/react"

function BannerImg() {
    return(
        <motion.div
            initial={{x: 200}}
            animate={{ x: 0, 
                transition: { duration: 1 }
             }}
        >
            <Image
                src = {carImg}
                alt = "Hero Car"
            />
        </motion.div>
    )
}

export default BannerImg;