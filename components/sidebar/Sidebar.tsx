import Button  from "@material-ui/core/Button"
import style from "../../styles/Sidebar.module.scss"
import Link from "next/link"


export default function Sidebar() {

    return(
        <div className={style.container}>
            <ul className={style.index_ul}>
                <Link href="/">
                    <li className={style.li}>
                        <Button style={{color:'white', backgroundColor: '#d3a570',width:'170px',height: '50px',left: '-39px'}} >ホーム</Button>
                    </li>
                </Link>
                <Link href="/reserve/Reserve">
                    <li>
                        <Button  style={{color:'white', backgroundColor: 'blue', width:'170px',height: '50px', left: '-39px'}}>予約</Button>
                    </li>
                </Link>
                <Link href="/medicationhistory/MedicationHistory">
                    <li>
                        <Button style={{color:'white', backgroundColor: 'green', width:'170px',height: '50px' ,left: '-39px'}}>薬歴</Button>
                    </li>
                </Link>    
            </ul>
        </div>
    )
}