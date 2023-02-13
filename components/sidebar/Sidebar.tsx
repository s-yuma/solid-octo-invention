import Button  from "@material-ui/core/Button"
import style from "../../styles/Sidebar.module.scss"
import Link from "next/link"
import { useRouter } from "next/router";

export default function Sidebar() {
    const router = useRouter();
    const name = router.query.name
    
    return(
        <>
            <div className={style.container} >
                <ul>
                    <Link href="/" className={style.li}>
                        <li>
                            <Button style={{color:'white', backgroundColor: 'aquamarine',width:'170px',height: '50px',left: '-39px','margin': '10px 0'}} className={style.button}>ホーム</Button>
                        </li>
                    </Link>

                    <Link href={{ pathname: `/reserve/Reserve[name]`, query: {name: name}  }} className={style.li}>
                        <li >
                            <Button style={{color:'white', backgroundColor: 'aquamarine', width:'170px',height: '50px', left: '-39px','margin': '10px 0'}} className={style.button}>予約</Button>
                        </li>
                    </Link>

                    <Link href={{ pathname: `/record/Record[name]`, query: {name: name}  }} className={style.li}>
                        <li >
                            <Button style={{color:'white', backgroundColor: 'aquamarine', width:'170px',height: '50px' ,left: '-39px','margin': '10px 0'}} className={style.button}>記録</Button>
                        </li>
                    </Link> 

                    <Link href={{ pathname: `/medicationhistory/MedicationHistory[name]`, query: {name: name}  }} className={style.li}>
                        <li >
                            <Button style={{color:'white', backgroundColor: 'aquamarine', width:'170px',height: '50px' ,left: '-39px','margin': '10px 0'}} className={style.button}>薬歴</Button>
                        </li>
                    </Link> 
                </ul>
            </div>
        </>
    )
}