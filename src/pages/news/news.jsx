import React from 'react'
import men from "../../assets/Mask group (8).png"
import { useTranslation } from 'react-i18next'
import photo2 from "../../assets/IMG_3107 1.png"

const News = () => {

  let [t, i18n] = useTranslation()
    
    function TranslateClick(lang) {
      i18n.changeLanguage(lang);
    }

  return (
    <div>
      <h1 className='text-[40px]'><b>{t("Sections6.9")}</b></h1>
      <br/>
      <div className='flex justify-around items-center flex-wrap gap-[50px]'>
        <div className='w-[300px]'>
          <img src={men} alt="" />
          <p><b>{t("Sections6.10")}</b></p>
          <br/>
          <p>{t("Sections6.11")}</p>
          <br/>
          <button className='border border-[#ED9121] text-[#ED9121] px-[15px] py-[5px] rounded-[10px]'>{t("Sections6.12")}</button>
        </div>

        <div className='w-[300px]'>
          <img src={men} alt="" />
          <p><b>{t("Sections6.10")}</b></p>
          <br/>
          <p>{t("Sections6.11")}</p>
          <br/>
          <button className='border border-[#ED9121] text-[#ED9121] px-[15px] py-[5px] rounded-[10px]'>{t("Sections6.12")}</button>
        </div>

        <div className='w-[300px]'>
          <img src={men} alt="" />
          <p><b>{t("Sections6.10")}</b></p>
          <br/>
          <p>{t("Sections6.11")}</p>
          <br/>
          <button className='border border-[#ED9121] text-[#ED9121] px-[15px] py-[5px] rounded-[10px]'>{t("Sections6.12")}</button>
        </div>

        <div className='w-[300px]'>
          <img src={men} alt="" />
          <p><b>{t("Sections6.10")}</b></p>
          <br/>
          <p>{t("Sections6.11")}</p>
          <br/>
          <button className='border border-[#ED9121] text-[#ED9121] px-[15px] py-[5px] rounded-[10px]'>{t("Sections6.12")}</button>
        </div>

        <div className='w-[300px]'>
          <img src={men} alt="" />
          <p><b>{t("Sections6.10")}</b></p>
          <br/>
          <p>{t("Sections6.11")}</p>
          <br/>
          <button className='border border-[#ED9121] text-[#ED9121] px-[15px] py-[5px] rounded-[10px]'>{t("Sections6.12")}</button>
        </div>

        <div className='w-[300px]'>
          <img src={men} alt="" />
          <p><b>{t("Sections6.10")}</b></p>
          <br/>
          <p>{t("Sections6.11")}</p>
          <br/>
          <button className='border border-[#ED9121] text-[#ED9121] px-[15px] py-[5px] rounded-[10px]'>{t("Sections6.12")}</button>
        </div>

        <div className='w-[300px]'>
          <img src={men} alt="" />
          <p><b>{t("Sections6.10")}</b></p>
          <br/>
          <p>{t("Sections6.11")}</p>
          <br/>
          <button className='border border-[#ED9121] text-[#ED9121] px-[15px] py-[5px] rounded-[10px]'>{t("Sections6.12")}</button>
        </div>

        <div className='w-[300px]'>
          <img src={men} alt="" />
          <p><b>{t("Sections6.10")}</b></p>
          <br/>
          <p>{t("Sections6.11")}</p>
          <br/>
          <button className='border border-[#ED9121] text-[#ED9121] px-[15px] py-[5px] rounded-[10px]'>{t("Sections6.12")}</button>
        </div>
      </div>

      <br/><br/><br/>

      <div className='flex justify-around items-center flex-wrap gap-[50px]'>
        <div className='text-[18px] lg:w-[600px]'>
          <h1 className='text-[40px]'><b>{t("Sections3.8")}</b></h1>
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
        <img src={photo2} alt="" />
      </div>
    </div>
  )
}

export default News