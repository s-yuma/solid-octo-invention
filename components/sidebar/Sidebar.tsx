import Button  from "@material-ui/core/Button"
import style from "./Sidebar.module.scss"
import Link from "next/link"
import { useRouter } from "next/router";

export default function Sidebar() {
    const router = useRouter();
    const name = router.query.name
    
    return(
        <>
            <div className={style.main}>
                <Link href="/" >
                    <Button className={style.button}>ホーム</Button>
                </Link>
                <Link href={{ pathname: `/reserve/Reserve[name]`, query: {name: name}  }}>
                    <Button className={style.button}>予約</Button>               
                </Link>
                <Link href={{ pathname: `/record/Record[name]`, query: {name: name}  }} >
                    <Button className={style.button}>記録</Button>
                </Link> 
                <Link href={{ pathname: `/medicationhistory/MedicationHistory[name]`, query: {name: name}  }} >
                    <Button className={style.button}>薬歴</Button>
                </Link> 
            </div>

      
            
        </>
    )
}