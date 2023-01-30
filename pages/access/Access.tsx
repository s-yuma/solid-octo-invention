import Heder from "../../components/heder/Heder";
import Sidebar from "../../components/sidebar/Sidebar"
import style from "../../styles/Access.module.scss"
export default function(){
    const css = {
        "border":"0" ,
        "allowfullscreen=":"",
        "loading":"lazy",
        "referrerpolicy":"no-referrer-when-downgrade"
      }

      const TABLE_DEFINE1 = [
        { label: '診察時間', key: 'time' },
        { label: '月', key: 'getu' },
        { label: '火', key: 'ka', },
        { label: '水', key: 'sui' },
        { label: '木', key: 'moku' },
        { label: '金', key: 'kin' },
        { label: '土', key: 'do' },
        { label: '日', key: 'niti' },
        { label: '祝', key: '祝' }
      ]
      const TABLE_DEFINE2 = [
        { label: '9:00~12:30', key: 'none' },
        { label: '●', key: 'getu' },
        { label: '●', key: 'ka', },
        { label: '●', key: 'sui' },
        { label: '●', key: 'moku' },
        { label: '●', key: 'kin' },
        { label: '●', key: 'do' },
        { label: '/', key: 'niti' },
        { label: '/', key: '祝' }
      ]
      const TABLE_DEFINE3 = [
        { label: '15:00~18:00', key: 'none' },
        { label: '●', key: 'getu' },
        { label: '●', key: 'ka', },
        { label: '●', key: 'sui' },
        { label: '/', key: 'moku' },
        { label: '●', key: 'kin' },
        { label: '/', key: 'do' },
        { label: '/', key: 'niti' },
        { label: '/', key: '祝' }
      ]
    return(
        <>
            <Heder/>
            <Sidebar/> 
        <div className={style.main}>
        <h2 className={style.h2}>周辺地図</h2>
            <div style={{"display":"flex"}}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.5846041363848!2d133.9338770155932!3d34.66519219262614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355406250dd61f11%3A0x8e7f5ecba47835ba!2z5bKh5bGx5Z-O!5e0!3m2!1sja!2sjp!4v1674736722593!5m2!1sja!2sjp" width="400" height="400" style={css}></iframe>
              <ul>
                <li>JR岡山駅から路面電車東山行き約5分、「城下」下車、徒歩約10分</li>
                <li>岡電高屋行き・東山経由西大寺行きバス「県庁前」下車、徒歩約5分</li>
                <li>岡山ICから東に約20分</li>
              </ul>
            </div>

            <div style={{"display":"block"}}>
              <h2 className={style.h2}>診察時間</h2>
            <table className={style.table}>
            <thead >
            <tr>
          {TABLE_DEFINE1.map((def) => (
            <th key={def.key}>{def.label}</th>
          ))}
            </tr>
            <tr>
          {TABLE_DEFINE2.map((def) => (
            <th key={def.key}>{def.label}</th>
          ))}
            </tr>
            <tr>
          {TABLE_DEFINE3.map((def) => (
            <th key={def.key}>{def.label}</th>
                  ))}
            </tr>
            </thead>
            </table>
              
            <div style={{"display": "flex"}}>
                <div>TEL：</div>
                <a href="tel:+080-3882-4566">080-3882-4566</a>
            </div>
            </div>
          </div>
        </>
    )
} 