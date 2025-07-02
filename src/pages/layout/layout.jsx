import React from 'react'
import { Link, Outlet } from 'react-router'
import menu from "../../assets/Group 55119.png"
import logo from "../../assets/_Ð¡Ð»Ð¾Ð¹_1.png"
import { Button } from 'antd'
import { useTranslation } from 'react-i18next'
import logo2 from "../../assets/_Ð¡Ð»Ð¾Ð¹_1 (1).png"

const Layout = () => {

  let [t, i18n] = useTranslation()
  
    function TranslateClick(lang) {
      i18n.changeLanguage(lang);
    }

  return (
    <div>
      <header>
        <div className='flex justify-around items-center p-[15px]'>
          <img src={menu} alt="" />
          <Link to={'about'}>
            <button>{t("Header.1")}</button>
          </Link>
          {/* <Link to={'vacancies'}>
            <button>{t("Header.2")}</button>
          </Link> */}
          <Link to={'news'}>
            <button>{t("Header.3")}</button>
          </Link>
          <Link to={'statiya'}>
            <button>{t("Header.4")}</button>
          </Link>
          <Link to={'contact'}>
            <button>{t("Header.9")}</button>
          </Link>
          <Link to={'other'}>
            <button>Other</button>
          </Link>
          <Link to={'takelaj'}>
            <button>Takelaj</button>
          </Link>
          <Button onClick={() => TranslateClick("en")}>{t("Example.3")}</Button>
          <br/>
          <Button onClick={() => TranslateClick("ru")}>{t("Example.5")}</Button>
          <br/>
          <Button onClick={() => TranslateClick("tj")}>{t("Example.4")}</Button>
        </div>
        <br/>
        <div className='justify-around items-center p-[15px] sm:hidden lg:flex'>
          <img src={logo} alt="" />
          <p>{t("Navbar.1")}</p>
          <p>{t("Navbar.2")}</p>
          <p>{t("Navbar.3")}</p>
          <p>{t("Navbar.4")}</p>
          <p>{t("Navbar.5")}</p>
          <p>{t("Navbar.6")}</p>
        </div>
      </header>

      <main>
        <Outlet/>
      </main>

      <footer>
        <div className='bg-[#212121] text-white py-[50px] text-center'>
          <h1 className='text-[40px]'><b>{t("Sections5.8")}</b></h1>
          <br/><br/>
          <div className='flex justify-center'>
            <div className='flex items-center gap-[25px]'>
              <p className='text-[20px] w-[270px]'>{t("Sections5.9")}</p>
              <button className='text-black bg-white px-[50px] py-[20px] text-[20px] rounded-[15px]'><b>Ctrl + D</b></button>
            </div>
          </div>
          
          <br/><br/>

          <div className='flex justify-around items-center p-[15px]'>
            <img src={logo2} alt="" />
            <p className='sm:hidden lg:block'>{t("Navbar.1")}</p>
            <p className='sm:hidden lg:block'>{t("Navbar.2")}</p>
            <p className='sm:hidden lg:block'>{t("Navbar.3")}</p>
            <p className='sm:hidden lg:block'>{t("Navbar.4")}</p>
            <p className='sm:hidden lg:block'>{t("Navbar.5")}</p>
            <p className='sm:hidden lg:block'>{t("Navbar.6")}</p>
            <button className='bg-[#ED9121] py-[10px] px-[25px] rounded-[10px] text-white'>{t("Sections3.10")}</button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout