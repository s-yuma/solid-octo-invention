import styles from "./Header.module.scss"
import Head from "next/head"
export default function Header() {
    return(
        <>  
        <Head>
        <meta name="viewport" content="width=device-width, user-scale=yes,
          initial-scale=1.0, maximum-scale=5.0" />
        <title>テストページ</title>
        </Head>
            <header className={styles.header}>医療マネージメント</header>
        </>
    )
}