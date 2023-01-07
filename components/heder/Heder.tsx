import React from 'react'
import style from '../../styles/Heder.module.scss'
import Image from 'next/image'
export default function Heder() {
  return (

    <div  className={style.container}>
      <Image src="/images/7707.png" width={1000} height={500} alt="music" className={style.img} />
      <h1 className={style.title}>ドレミクリック</h1>
  </div>
  )
}
