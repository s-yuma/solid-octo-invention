import { useEffect } from "react";
import { UseReserveListiRead } from "./ UseReserveListRead"

export default function Reserve() {
    const {reserveList,fetch} = UseReserveListiRead();

    useEffect(() => {
        fetch()
      },[])
    return (
      <>
      <h2>予約日時
      </h2>
        <div>
        {Object.values(reserveList).map((list:any,index) => (
                <div key={index}  >
                    <div>{list.start}</div>
                </div>
            ))}
        </div>
      </>
    )
}