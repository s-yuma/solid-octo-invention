import React, { useContext } from 'react'
import { useState} from 'react'
import { supabase } from '../../utils/supabaseClient'
import styles from './MedicationHistory.module.scss'
import { UseMedicalListRead } from './UseMedicalListRead'
import { UpdateContext } from '../../pages/medicationhistory/MedicationHistory[name]';
import { TextField } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';
import Button, { ButtonProps } from '@mui/material/Button';


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

    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
        color: theme.palette.getContrastText(blueGrey[200]),
        backgroundColor: blueGrey[100],
        '&:hover': {
          backgroundColor: blueGrey[400],
        },
      }));

    return (
        <>
        <div className={styles.HistoryInput}>

        <h3 style={{"paddingLeft":"450px"}}>◆薬歴入力◆</h3>
        <form onSubmit={pushMedicalHistory}>
            <TextField value={diseasename} label="薬名を入力してください" variant="outlined" onChange={event => setDiseaseName(event.target.value)} className={styles.TextBox} required/>
            <TextField value={medicine} label="病名・症状を入力してください" variant="outlined" onChange={event => setMediCine(event.target.value)} className={styles.TextBox} required/>
            <ColorButton type="submit" size="large" variant="outlined" style={{"left":"20px","top":"5px"}} >登録</ColorButton>
        </form>
        </div>
       
    </>
    )
}
