import React from 'react'
import { useTranslation } from 'react-i18next'
import photo4 from "../../assets/Mask group (6).png"
import photo from "../../assets/Outline.png"
import back from "../../assets/Mask group (7).png"
import book from "../../assets/book.png"
import logo3 from "../../assets/image 8.png"
import sert from "../../assets/image 2.png"
import cdek from "../../assets/image 12.png"
import mega from "../../assets/image 13.png"
import ros from "../../assets/image 14.png"
import mari from "../../assets/image 16.png"

const About = () => {

  let [t, i18n] = useTranslation()
    
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div>
      <div className='flex justify-around items-center flex-wrap gap-[50px]'>
        <div className='lg:w-[550px] px-[20px]'>
          <h1 className='text-[40px]'><b>{t("Sections6.1")}</b></h1>
          <br/>
          <p>{t("Sections6.2")}</p>
        </div>
        <img src={photo4} alt="" />
      </div>

      <br/><br/><br/>

      <div className='flex justify-around items-center flex-wrap gap-[50px] bg-[#EBEBEB] p-[20px]'>
        <div className='flex items-center gap-[15px] w-[250px]'>
          <img src={photo} alt="" />
          <p>{t("Example.6")}</p>
        </div>
        <div className='flex items-center gap-[15px] w-[250px]'>
          <img src={photo} alt="" />
          <p>{t("Example.7")}</p>
        </div>
        <div className='flex items-center gap-[15px] w-[250px]'>
          <img src={photo} alt="" />
          <p>{t("Example.8")}</p>
        </div>
      </div>

      <img src={back} alt="" className='sm:h-[250px] w-[100%]'/>

      <div className='text-white text-center absolute sm:top-[1200px] lg:top-[860px] lg:left-[25%]'>
        <h2 className='text-[35px]'><b>{t("Sections6.3")}</b></h2>
        <br/>
        <p className='text-[20px]'>{t("Sections6.4")}</p>
      </div>

      <br/><br/><br/>

      <div className='flex justify-around items-center flex-wrap gap-[50px]'>
        <div className='text-center w-[300px]'>
          <img src={book} alt="" className='lg:ml-[120px] '/>
          <p>{t("Sections6.5")}</p>
        </div>

        <div className='text-center w-[300px]'>
          <img src={book} alt="" className='lg:ml-[120px] '/>
          <p>{t("Sections6.5")}</p>
        </div>

        <div className='text-center w-[300px]'>
          <img src={book} alt="" className='lg:ml-[120px] '/>
          <p>{t("Sections6.5")}</p>
        </div>

        <div className='text-center w-[300px]'>
          <img src={book} alt="" className='lg:ml-[120px] '/>
          <p>{t("Sections6.5")}</p>
        </div>

        <div className='text-center w-[300px]'>
          <img src={book} alt="" className='lg:ml-[120px] '/>
          <p>{t("Sections6.5")}</p>
        </div>

        <div className='text-center w-[300px]'>
          <img src={book} alt="" className='lg:ml-[120px] '/>
          <p>{t("Sections6.5")}</p>
        </div>

        <div className='text-center w-[300px]'>
          <img src={book} alt="" className='lg:ml-[120px] '/>
          <p>{t("Sections6.5")}</p>
        </div>

        <div className='text-center w-[300px]'>
          <img src={book} alt="" className='lg:ml-[120px] '/>
          <p>{t("Sections6.5")}</p>
        </div>
      </div>

      <br/><br/><br/>

      <div className='text-center'>
        <h1 className='text-[40px]'><b>{t("Sections6.6")}</b></h1>
        <br/>
        <div className='flex justify-around items-center flex-wrap gap-[50px]'>
          <img src={logo3} alt="" />
          <img src={logo3} alt="" />
          <img src={logo3} alt="" />
          <img src={logo3} alt="" />
        </div>
      </div>

      <br/><br/><br/>

      <div className='bg-[#212121] text-white py-[50px] text-center'>
        <h1 className='text-[40px]'><b>{t("Sections4.18")}</b></h1>
        <br/><br/>
        <div className='flex justify-around items-center flex-wrap gap-[50px]'>
          <img src={sert} alt="" />
          <img src={sert} alt="" />
          <img src={sert} alt="" />
          <img src={sert} alt="" />
        </div>
      </div>

      <br/><br/><br/>

      <div className='text-center'>
        <h1 className='text-[40px]'><b>{t("Sections6.7")}</b></h1>
        <br/>
        <p>{t("Sections6.8")}</p>
        <br/><br/>
        <div className='flex justify-around items-center flex-wrap gap-[50p]'>
          <img src={cdek} alt="" />
          <img src={mega} alt="" />
          <img src={ros} alt="" />
          <img src={mari} alt="" />
        </div>
      </div>
      <br/><br/><br/>
    </div>
  )
}

export default About