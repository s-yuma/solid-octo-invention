import styles from './Record.module.scss'
import { supabase } from '../../utils/supabaseClient'
import { useState } from 'react';
import { UseRecordRead } from './UseRecordRead'
import RecordCalender from "../../components/record/RecordCalender";
import { styled } from '@mui/material/styles';
import { blue, teal, brown } from '@mui/material/colors';
import Button, { ButtonProps } from '@mui/material/Button';
import ExcelJS from "exceljs";

export default function RecordInput(props:any){
    const { recordList, fetch } = UseRecordRead();
    const dateObj = new Date();
    const [time, setTime] = useState(
        dateObj.getFullYear() + '-' +
        ('00' + (dateObj.getMonth() + 1)).slice(-2) + '-' + //月の取得 ※0~11で取得になるため+1
        ('00' + dateObj.getDate()).slice(-2) +//日付の取得
        'T'+
        ('00' + dateObj.getHours()).slice(-2) + ':' + //時間の取得
        ('00' + dateObj.getMinutes()).slice(-2) + ':' + //分の取得
        //('00' + dateObj.getSeconds()).slice(-2) //秒の取得
        +'0'+'0'
    )
    const time1push= async (e:any)=> {
        e.preventDefault();
        try {
            const { data, error } = await supabase
            .from('toilet')
            .insert([{
                name: props.name,
                title:"💩",
                start:time,
                end:time
            }])
    
        } catch (error) {
            console.log(error)
        }
    
        fetch(props.name);
        }

        const ExcelDownload = async (e:any) => {
            e.preventDefault();
            const workbook = new ExcelJS.Workbook();
            workbook.addWorksheet("sheet1");
            const worksheet = workbook.getWorksheet("sheet1");
          
            worksheet.columns = [
                { header: "便・尿", key: "title" },
                { header: "時間", key: "start" }
              ];
          
              Object.values(recordList).map((list:any,index) =>{
                worksheet.addRow({title: list.title, start: list.start})
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

        const time2push= async (e:any)=> {
            e.preventDefault();
            try {
                const { data, error } = await supabase
                .from('toilet')
                .insert([{
                    name: props.name,
                    title:"🚰",
                    start:time,
                    end:time   
                }])
        
            } catch (error) {
                console.log(error)
            }
        
            fetch(props.name);
            }


    return(
        <>
            <div className={styles.container}>
                <div className={styles.inputButton}>
                    <button type="submit"  onClick={time1push} className={styles.button}>💩</button>
                    <button type="submit"  onClick={time2push} className={styles.button}>💧</button>
                    <button className={styles.excel} onClick={(e) => ExcelDownload(e)}>Excel出力</button>
                </div>
                <div className={styles.calender}>
                    <RecordCalender name={props.name}/>
                </div>
            </div>
           
        </>
    )
}