import styles from "./Header.module.scss"
import Head from "next/head"
import Button  from "@material-ui/core/Button"
import Link from "next/link"
import { useRouter } from "next/router";


export default function Header() {
    const router = useRouter();
    const name = router.query.name
    return(
        <>  
        <Head>
        <meta name="viewport" content="width=device-width, user-scale=yes,
          initial-scale=1.0, maximum-scale=5.0" />
        <title>テストページ</title>
        </Head>

            <header className={styles.header}>
                <div className={styles.title}>FMM</div>
            <div className={styles.main}>
                <Link href="/" >
                    <Button className={styles.button}>ホーム</Button>
                </Link>
                <Link href={{ pathname: `/reserve/Reserve[name]`, query: {name: name}  }}>
                    <Button className={styles.button}>予約</Button>               
                </Link>
                <Link href={{ pathname: `/record/Record[name]`, query: {name: name}  }} >
                    <Button className={styles.button}>記録</Button>
                </Link> 
                <Link href={{ pathname: `/medicationhistory/MedicationHistory[name]`, query: {name: name}  }} >
                    <Button className={styles.button}>薬歴</Button>
                </Link> 
            </div>
            
            </header>
        </>
    )
}