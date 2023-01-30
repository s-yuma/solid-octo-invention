import React, { useContext } from 'react'
import { useState} from 'react'
import { supabase } from '../../utils/supabaseClient'
import styles from './MedicationHistory.module.scss'
import { useAddMedicalList } from './useAddmedicalList';
import { useUser } from '@auth0/nextjs-auth0/client';
import { UpdateContext } from '../../pages/medicationhistory/MedicationHistory';

export default function MedicationHistory() {
const [diseasename, setDiseaseName ]= useState("")
const [medicine, setMediCine] = useState("")
const { fetch } = useAddMedicalList();
const { user } = useUser();
const [name, setName] = useState(user?.name)
const {updata, setUpdata}= useContext(UpdateContext)

const pushMedicalHistory = async (e:any)=> {
    setName(user?.name)
    console.log(name)
    e.preventDefault();
    try {
        const { data, error } = await supabase
        .from('medicinehistory')
        .insert([{
            name: name,
            diseasename,
            medicine
        }])

    } catch (error) {
        console.log(error)
    }

    fetch();
    setDiseaseName('');
    setMediCine('');
    setUpdata(updata?false:true)
    }


    return (
        <>
        <div className={styles.HistoryList}>
        <h3>◆薬歴入力◆</h3>
        <form onSubmit={pushMedicalHistory}>
            <input type="text" value={diseasename} placeholder='病名を入力してください' onChange={event => setDiseaseName(event.target.value)}/>
            <input type="text" value={medicine} placeholder='薬名を入力してください' onChange={event => setMediCine(event.target.value)}/>
            <button type="submit">登録</button>
        </form>
        </div>
    </>
    )
}
