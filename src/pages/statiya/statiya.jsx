import React from 'react'
import { useTranslation } from 'react-i18next'
import man4 from "../../assets/Mask group (9).png"


const Statiya = () => {

  let [t, i18n] = useTranslation()
    
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div>
      <h1 className='text-[40px]'><b>{t("Sections6.10")}</b></h1>
      <br/><br/>
      <img src={man4} alt="" className='w-[90%] m-auto'/>
      <br/><br/>
      <div className='text-[20px] sm:px-[25px] lg:px-[60px] text-justify'>
        <p>{t("Sections6.13")}</p>
        <br/><br/>
        <h2 className='text-[40px]'><b>{t("Sections6.14")}</b></h2>
        <br/>
        <p>{t("Sections6.15")}</p>
        <br/><br/>
        <h2 className='text-[40px]'><b>{t("Sections6.16")}</b></h2>
        <br/>
        <p>{t("Sections6.17")}</p>
        <br/>
        <p>{t("Sections6.18")}</p>
        <br/><br/>
        <h2 className='text-[40px]'><b>{t("Sections6.19")}</b></h2>
        <br/>
        <p>{t("Sections6.20")}</p>
      </div>
    </div>
  )
}

export default Statiya