import { useRouter } from "next/router";
import RecordInput from "../../components/record/RecordInput";
import Sidebar from "../../components/sidebar/Sidebar";
// import RecordCalender from "../../components/record/RecordCalender";
import { useContext } from "react";
import style from "../../components//record//Record.module.scss" 
import dynamic from 'next/dynamic';
const RecordCalender = dynamic(() => import('../../components/record/RecordCalender'), {
    ssr: false
});
export default function Record(props:any) {

    const router = useRouter();
    const name = router.query.name;

    console.log("get"+ name)
    return(
        <>
            <div className={style.conteiner}>
            <Sidebar/>
            <div style={{"display":"flex","verticalAlign":"top"}}>
                <RecordInput name={name}/>
                <RecordCalender name={name} />
            </div>
            </div>
        </>
    )
}