import Test from '../../components/calender/test';
import Sidebar from "../../components/sidebar/Sidebar";
import Heder from "../../components/heder/Heder";
import dynamic from 'next/dynamic'
export default function Reserve() {
  const Calender = dynamic(() => import("../../components/calender/Calender"), {
  ssr: false,
});
  return (
    
    <>  
      <Heder/>
      <Sidebar/> 
      <Calender/>
    </>
  );
}