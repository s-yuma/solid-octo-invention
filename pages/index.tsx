import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Link from "next/link"
// import HomeCalender from '../components/home/HomeCalender';
import dynamic from 'next/dynamic';
import Header from '../components/header/HomeHeader';
import HomeHeader from '../components/header/HomeHeader';
import style from "../styles//Index.module.scss"
import { Accordion } from 'react-bootstrap-accordion'
import { AccordionDetails } from '@mui/material';
import Image from 'next/image';

const Home: NextPage = (props) => {


  return (
    <>
      <Header/>
      <h1 className={style.title}>家庭内医療管理アプリ</h1>

      <div className={style.container}>
      <Image className={style.img} src="/images/home1.png" width={400} height={400} alt="画像" ></Image>
      <Link href="/Main" id="button" >
        <button className={style.button}>ホームへ</button>
      </Link>
      <details className={style.details}>
          <summary>使い方</summary>
          <details>
            <summary>ホーム</summary>
            <div>横スクロールをしてユーザーを選択してください。</div>
            <div>カレンダーでは全ユーザーのスケジュールを確認できます。</div>
          </details>
          <details>
            <summary>予約</summary>
            <div>病院の予約日時などを入力して登録してください。</div>
            <div>カレンダーでは個人のスケジュールを確認できます。</div>
          </details>
          <details>
            <summary>記録</summary>
            <div>（💩）便や（💧）尿をした時にボタンを押下する事で日時を記録することができます。</div>
            <div>PCでは「Excel出力」ボタンを押下する事で記録したデータを出力できます。</div>
          </details>
          <details>
            <summary>薬歴</summary>
            <div>薬名と病名・症状を入力して登録してください。</div>
            <div>薬歴リストでは表示が白色が服用中、灰色が服用が終わったもので管理します。</div>
            <div>服用をやめた薬は×アイコンを押下して</div>
            <div>PCでは「Excel出力」ボタンを押下する事で記録したデータを出力できます。</div>
          </details>
      </details>
        </div>

      
    </>
        
  )
}

export default Home