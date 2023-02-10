import React, { useContext } from 'react'
import { useState} from 'react'
import { supabase } from '../../utils/supabaseClient'
import styles from './MedicationHistory.module.scss'
import { UseAddMedicalList } from './UseAddmedicalList'
import { UpdateContext } from '../../pages/medicationhistory/MedicationHistory[name]';
import { TextField } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';
import Button, { ButtonProps } from '@mui/material/Button';


export default function MedicationHistory(props:any) {
const [diseasename, setDiseaseName ]= useState("")
const [medicine, setMediCine] = useState("")
const { fetch } = UseAddMedicalList();
const {updata, setUpdata}= useContext(UpdateContext)

const pushMedicalHistory = async (e:any)=> {
    // setName(user?.name)
    // console.log(name)
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
    setUpdata(updata?false:true)
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
            <TextField  label="薬名を入力してください" variant="outlined" onChange={event => setDiseaseName(event.target.value)} style={{"width":"500px","backgroundColor":"white"}}/>
            <TextField  label="病名・症状を入力してください" variant="outlined" onChange={event => setMediCine(event.target.value)} style={{"width":"500px","backgroundColor":"white"}}/>
            <ColorButton type="submit" size="large" variant="outlined" style={{"left":"20px","top":"5px"}} >登録</ColorButton>
        </form>
        </div>
       
    </>
    )
}
