import styles from './MedicationHistory.module.scss'
import { useState } from 'react';
import { UseMedicalListRead } from './UseMedicalListRead';
import { UpdateContext } from '../../pages/medicationhistory/MedicationHistory[name]';
import React, { useContext, useEffect  } from 'react'
import ExcelJS from "exceljs";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';
import { supabase } from '../../utils/supabaseClient'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export default function MedicationHistoryList(props:any) {
    const {medicalList,fetch} = UseMedicalListRead();

useEffect(() => {
  fetch()
},[medicalList])

const ExcelDownload = async (e:any) => {
  e.preventDefault();
  const workbook = new ExcelJS.Workbook();
  workbook.addWorksheet("sheet1");
  const worksheet = workbook.getWorksheet("sheet1");

  worksheet.columns = [
      { header: "病名", key: "diseasename" },
      { header: "薬名", key: "medicine" },
      { header: "飲み始め", key: "start" },
      { header: "飲み終わり", key: "end" },
    ];

    Object.values(medicalList).map((list:any,index) =>{
      worksheet.addRow({diseasename: list.diseasename, medicine: list.medicine,start: list.start, end: list.end })
      }
    );

    const uint8Array = await workbook.xlsx.writeBuffer();
    const blob = new Blob([uint8Array], {type: 'application/octet-binary'});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sample.xlsx`;
    a.click();
    a.remove()
}

const Update = async (e:any,id:string) => {
  e.preventDefault();
  const date = new Date();
  const text = date.getFullYear() + '-' + //年の取得
       ('00' + (date.getMonth() + 1)).slice(-2) + '-' + //月の取得 ※0~11で取得になるため+1
       ('00' + date.getDate()).slice(-2)
  const { error } = await supabase
  .from('medicinehistory2')
  .update({ end: text})
  .eq('id', id)
  if(error) {
    console.log(error)
  } else {
    fetch()
    console.log(id)
  }

} 


  return (
    <>
    <div className={styles.HistoryList}>
        <div className={styles.ListTitle}>
          <h3>◆薬歴リスト◆</h3>
          <button className={styles.excel} onClick={(e) => ExcelDownload(e)}>Excel出力</button>
        </div>
            {Object.values(medicalList).map((list:any,index) => (
                <div key={index} className={styles.list} >
               <Accordion style={{"marginLeft":"70px","marginBottom":"10px","width":"1000px"}}>
                {list.end ? (
                  <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  style={{"backgroundColor":"gray"}}
                >
                    <Typography style={{"textAlign":"left"}}><div >{list.diseasename}</div></Typography>
                </AccordionSummary>
                  ): (
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{"backgroundColor":"white"}}
                  >
                      <Typography style={{"textAlign":"left"}}><div >{list.diseasename}</div></Typography>
                  </AccordionSummary>
                  )}
                
        <AccordionDetails>
          <Typography>
          {list.medicine}
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Button onClick={(e) => Update(e,list.id)} style={{"marginBottom":"30px"}}><HighlightOffIcon style={{"color":"red"}}></HighlightOffIcon></Button>
                </div>
            ))}

    </div>
    </>
  )
}
