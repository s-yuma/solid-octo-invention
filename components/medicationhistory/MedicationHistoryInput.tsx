import React, { useContext } from 'react'
import { useState} from 'react'
import { supabase } from '../../utils/supabaseClient'
import styles from './MedicationHistory.module.scss'
import { UseMedicalListRead } from './UseMedicalListRead'
import { UpdateContext } from '../../pages/medicationhistory/MedicationHistory[name]';
import { TextField } from '@material-ui/core';


export default function MedicationHistory(props:any) {
const [diseasename, setDiseaseName ]= useState<string>("")
const [medicine, setMediCine] = useState<string>("")
const { fetch } = UseMedicalListRead();

const pushMedicalHistory = async (e:any)=> {

    e.preventDefault();
    try {
        const { data, error } = await supabase
        .from('medicinehistory2')
        .insert([{
            name: props.name,
            diseasename,
            medicine
        }])

    } catch (error) {
        console.log(error)
    }
    fetch()
    setDiseaseName('')
    setMediCine('')
    }

    return (
        <>
        <div className={styles.HistoryInput}>

        <h3 className={styles.title}>◆薬歴入力◆</h3>
        <div className={styles.form}>
        <form onSubmit={pushMedicalHistory}>
            <TextField value={diseasename} label="薬名を入力してください" variant="outlined" onChange={event => setDiseaseName(event.target.value)} className={styles.TextBox} required/>
            <TextField value={medicine} label="病名・症状を入力してください" variant="outlined" onChange={event => setMediCine(event.target.value)} className={styles.TextBox} required/>
            <button type="submit" className={styles.button} >登録</button>
        </form>

        </div>

        </div>
       
    </>
    )
}
