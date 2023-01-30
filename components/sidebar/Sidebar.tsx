import Button  from "@material-ui/core/Button"
import style from "../../styles/Sidebar.module.scss"
import Link from "next/link"


export default function Sidebar() {

    return(
        <div className={style.container}>
            <ul className={style.index_ul}>
                <Link href="/" className={style.li}>
                    <li>
                        <Button style={{color:'white', backgroundColor: 'aquamarine',width:'170px',height: '50px',left: '-39px','margin': '2px 0'}} className={style.button}>ホーム</Button>
                    </li>
                </Link>
                <Link href="/reserve/Reserve" className={style.li}>
                    <li >
                        <Button style={{color:'white', backgroundColor: 'aquamarine', width:'170px',height: '50px', left: '-39px','margin': '2px 0'}} className={style.button}>予約</Button>
                    </li>
                </Link>
                <Link href="/medicationhistory/MedicationHistory" className={style.li}>
                    <li >
                        <Button style={{color:'white', backgroundColor: 'aquamarine', width:'170px',height: '50px' ,left: '-39px','margin': '2px 0'}} className={style.button}>薬歴</Button>
                    </li>
                </Link>    
                <Link href="/access/Access" className={style.li}>
                    <li >
                        <Button style={{color:'white', backgroundColor: 'aquamarine', width:'170px',height: '50px' ,left: '-39px','margin': '2px 0'}} className={style.button}>アクセス</Button>
                    </li>
                </Link>   
            </ul>
        </div>
    )
}