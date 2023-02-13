import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Link from "next/link"
// import HomeCalender from '../components/home/HomeCalender';
import style from "../styles/Calender.module.scss"
import dynamic from 'next/dynamic';
const HomeCalender = dynamic(() => import('../components/home/HomeCalender'), {
    ssr: false
});

const Home: NextPage = (props) => {
  const users =[
    {name:"母", style1:styles.btn_m1, style2:styles.btn_m2},
    {name:"父", style1:styles.btn_f1, style2:styles.btn_f2},
    {name:"息子", style1:styles.btn_b1, style2:styles.btn_b2},
    {name:"娘", style1:styles.btn_s1, style2:styles.btn_s2},
    {name:"祖母", style1:styles.btn_gm1, style2:styles.btn_gm2},
    {name:"祖父", style1:styles.btn_gf1, style2:styles.btn_gf2},
  ];

  return (
    <>
    <div className={styles.body}>
      <div className={styles.container}>
      {users.map((user) => {
        return (
          <div className={user.style1} key={user.name}>
            <Link href={{ pathname: `/record/Record[name]`, query: {name: user.name} }}  className={user.style2} >
              {user.name}
            </Link>
          </div>
        );
      })}
      </div>
      <div className={style.container}>
        <HomeCalender />
      </div>
      </div>
    </>
        
  )
}

export default Home