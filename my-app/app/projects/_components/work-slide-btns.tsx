'use client'
import React from 'react'

import {useSwiper} from "swiper/react"
import {PiCaretLeftBold, PiCaretRightBold} from 'react-icons/pi'
import { Button } from '@/components/ui/button'

const WorkSlideBtns = ({containerStyles, btnsStyles, iconsStyles} : any) => {
    const swiper = useSwiper()
  return (
    <div className={containerStyles}>
        <Button className={btnsStyles} onClick={() => swiper.slidePrev()}>
            <PiCaretLeftBold className={iconsStyles} />
        </Button>
        <Button className={btnsStyles} onClick={() => swiper.slideNext()}>
            <PiCaretRightBold className={iconsStyles} />
        </Button>
    </div>
  )
}

export default WorkSlideBtns