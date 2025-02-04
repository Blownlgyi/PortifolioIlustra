
import { useEffect, useRef, useState } from 'react'


export const AnimationIntro = () => {
    let [classN, SetClassN] = useState('intro')



    window.onload = () => {
        setTimeout(() => {
            SetClassN('intro back')
        }, 1000);
        setTimeout(() => {
            SetClassN('intro back hidden')
        }, 1500)

    }




    return (
        <section className={classN} >
           
            <div className="spin">

            </div>
            <div className='bg-intro'>

            </div>
        </section>
    )

}