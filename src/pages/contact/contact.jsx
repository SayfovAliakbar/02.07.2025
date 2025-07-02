import React from 'react'
import { useTranslation } from 'react-i18next'
import card from "../../assets/image 21.png"
import photo3 from "../../assets/DSCF9619 2.png"


const Contact = () => {

  let [t, i18n] = useTranslation()
    
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div>
      <h1 className='text-[40px]'><b>{t("Header.9")}</b></h1>

      <br/><br/>

      <div className='flex justify-around items-center flex-wrap gap-[50px]'>
        <div>
          <p><b>{t("Sections7.1")}</b></p>
          <p>{t("Sections7.2")}</p>
          <br/>
          <p><b>{t("Sections7.5")}</b></p>
          <p>8 (800) 700-51-53,   +7 (965) 226-57-90</p>
        </div>

        <div className='w-[500px] bg-[#e1e1e1a2] p-[25px] rounded-[15px]'>
          <h2 className='text-[30px]'><b>{t("Sections7.3")}</b></h2>
          <br/><br/>
          <input type="text" placeholder={t("Sections7.4")} className='bg-white w-[100%] h-[50px] rounded-[10px]'/>
          <br/><br/>
          <input type="text" placeholder={t("Sections7.5")} className='bg-white w-[100%] h-[50px] rounded-[10px]'/>
          <br/><br/>
          <button className='bg-[#ED9121] text-white w-[100%] h-[50px]'>{t("Sections7.6")}</button>
        </div>
      </div>

      <br/><br/><br/>

      <img src={card} alt="" className='m-auto rounded-[15px]'/>

      <br/><br/><br/>

      <div className='text-center sm:px-[25px] lg:px-[100px]'>
        <h1 className='text-[40px]'><b>{t("Sections7.7")}</b></h1>
        <br/>
        <p>{t("Sections7.8")}</p>
      </div>

      <br/><br/><br/>

      <div className='flex justify-around items-center flex-wrap gap-[50px]'>
        <div className='text-[18px] lg:w-[600px]'>
          <h1 className='text-[40px]'><b>{t("Sections5.4")}</b></h1>
          <br/>
          <p>{t("Sections3.9")}</p>
          <br/>
            <div className='flex items-center gap-[25px]'>
              <input type="text" placeholder='+7' className='border px-[25px] py-[10px] rounded-[10px]'/>
              <button className='bg-[#ED9121] py-[10px] px-[25px] rounded-[10px] text-white'>{t("Sections3.10")}</button>
            </div>
            <br/>
            <p>{t("Sections3.11")}</p>
        </div>
        <img src={photo3} alt="" />
      </div>

      <br/><br/><br/>
    </div>
  )
}

export default Contact