import React from 'react'
import { useState} from 'react'
import { supabase } from '../../utils/supabaseClient'
import styles from './MedicationHistory.module.scss'
import { useAddMedicalList } from './useAddmedicalList';
export default function MedicationHistory() {
const [diseasename, setDiseaseName ]= useState("")
const [medicine, setMediCine] = useState("")
const { fetch } = useAddMedicalList();

const pushMedicalHistory = async (e:any)=> {
    e.preventDefault();
    try {
        const { data, error } = await supabase
        .from('medicinehistory')
        .insert([{
            id: 4,
            diseasename,
            username: 'uma',
            medicine
        }])

    } catch (error) {
        console.log(error)
    }

    fetch();
    setDiseaseName('');
    setMediCine('');
        
    }


    return (
        <>
        <div className={styles.HistoryList}>
        <h3>◆薬歴入力◆</h3>
        <form onSubmit={pushMedicalHistory}>
            <input type="text" value={diseasename} placeholder='薬を入力してください' onChange={event => setDiseaseName(event.target.value)}/>
            <input type="text" value={medicine} placeholder='病名を入力してください' onChange={event => setMediCine(event.target.value)}/>
            <button type="submit">登録</button>
        </form>
        </div>
    </>
    )
}
