import styles from './Record.module.scss'
import { supabase } from '../../utils/supabaseClient'
import { useState } from 'react';
import { UseRecordRead } from './UseRecordRead'
import RecordCalender from "../../components/record/RecordCalender";
import { styled } from '@mui/material/styles';
import { blue, teal, brown } from '@mui/material/colors';
import Button, { ButtonProps } from '@mui/material/Button';

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
        ('00' + dateObj.getSeconds()).slice(-2) //秒の取得
    )
    const time1push= async (e:any)=> {
        // setName(user?.name)
        // console.log(name)
        e.preventDefault();
        try {
            const { data, error } = await supabase
            .from('toilet')
            .insert([{
                name: props.name,
                title:"💩",
                start:time,
                
            }])
    
        } catch (error) {
            console.log(error)
        }
    
        fetch(props.name);
        // setUpdata(updata?false:true)
        }

        const time2push= async (e:any)=> {
            // setName(user?.name)
            // console.log(name)
            e.preventDefault();
            try {
                const { data, error } = await supabase
                .from('toilet')
                .insert([{
                    name: props.name,
                    title:"🚰",
                    start:time
                }])
        
            } catch (error) {
                console.log(error)
            }
        
            fetch(props.name);
            // setUpdata(updata?false:true)
            }

            const ColorButton1 = styled(Button)<ButtonProps>(({ theme }) => ({
                color: theme.palette.getContrastText(brown[200]),
                backgroundColor: brown[100],
                width: 250,
                height: 150,
                borderRadius: 20,
                marginBottom: 20,
                fontSize: 100,
                '&:hover': {
                  backgroundColor: brown[400],
                },
              }));

              const ColorButton2 = styled(Button)<ButtonProps>(({ theme }) => ({
                color: theme.palette.getContrastText(blue[200]),
                backgroundColor: blue[100],
                width: 250,
                height: 150,
                borderRadius: 20,
                marginBottom: 20,
                fontSize: 100,
                '&:hover': {
                  backgroundColor: blue[400],
                },
              }));

    return(
        <>
            <div className={styles.main}>
            <ColorButton1 type="submit" size="large" variant="outlined" style={{"left":"20px","top":"5px"}} onClick={time1push}>💩</ColorButton1>
            <ColorButton2 type="submit" size="large" variant="outlined" style={{"left":"20px","top":"5px"}} onClick={time2push} >💧</ColorButton2>
            </div>
           
        </>
    )
}
