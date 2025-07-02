import React from 'react'
import { useTranslation } from 'react-i18next'
import man from "../../assets/Стандарт Экспресс 1.png"
import photo from "../../assets/Outline.png"
import man2 from "../../assets/Mask group (1).png"
import loader from "../../assets/Group (3).png"
import someone from "../../assets/Mask group (2).png"
import video from "../../assets/Mask group (3).png"
import video2 from "../../assets/Mask group (4).png"
import video3 from "../../assets/Mask group (5).png"
import photo2 from "../../assets/IMG_3107 1.png"
import sert from "../../assets/image 2.png"
import photo3 from "../../assets/DSCF9619 2.png"

const Home = () => {

  let [t, i18n] = useTranslation()

  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div>
      <div className='flex justify-around items-center flex-wrap gap-[50px]'>
        <div className='lg:w-[550px]'>
          <h1 className='text-[40px]'><b>{t("Header.5")} <button className='text-white bg-[#ED9121] py-[5px] px-[10px] rounded-[20px]'>{t("Header.6")}</button> </b></h1>
          <br/>
          <p>{t("Header.7")}</p>
          <br/>
          <button className='bg-black text-white py-[10px] px-[20px] rounded-[15px]'>{t("Header.8")}</button>
        </div>
        <img src={man} alt="" />
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

      <br/><br/><br/>

      <img src={man2} alt="" className='m-auto'/>

      <br/><br/>

      <div className='text-center text-[20px] px-[100px]'>
        <h1 className='text-[40px]'>{t("Sections.1")}</h1>
        <br/>
        <p>{t("Sections.2")}</p>
      </div>

      <br/><br/><br/>

      <div className='bg-[#ECECEC] py-[50px]'>
        <h1 className='text-[40px] text-center'><b>{t("Sections.3")}</b></h1>
        <br/>
        <div className='border border-[#ED9121] flex justify-between items-center p-[10px] w-[95%] m-auto rounded-[15px]'>
          <p className='text-[#ED9121]'>{t("Sections.4")}</p>
          <div className='flex items-center gap-[15px]'>
            <p className='text-[20px]'><b>{t("Sections.5")}</b></p>
            <button className='bg-[#ED9121] text-white p-[10px] rounded-[15px]'>{t("Sections.6")}</button>
          </div>
        </div>

        <br/><br/>

        <div className='bg-white flex justify-between items-center p-[10px] w-[95%] m-auto rounded-[15px]'>
          <p>{t("Sections.4")}</p>
          <div className='flex items-center gap-[15px]'>
            <p className='text-[20px]'><b>{t("Sections.5")}</b></p>
            <button className='border border-[#ED9121] text-[#ED9121] p-[10px] rounded-[15px]'>{t("Sections.6")}</button>
          </div>
        </div>

        <br/><br/>

        <div className='bg-white flex justify-between items-center p-[10px] w-[95%] m-auto rounded-[15px]'>
          <p>{t("Sections.4")}</p>
          <div className='flex items-center gap-[15px]'>
            <p className='text-[20px]'><b>{t("Sections.5")}</b></p>
            <button className='border border-[#ED9121] text-[#ED9121] p-[10px] rounded-[15px]'>{t("Sections.6")}</button>
          </div>
        </div>

        <br/><br/>

        <div className='bg-white flex justify-between items-center p-[10px] w-[95%] m-auto rounded-[15px]'>
          <p>{t("Sections.4")}</p>
          <div className='flex items-center gap-[15px]'>
            <p className='text-[20px]'><b>{t("Sections.5")}</b></p>
            <button className='border border-[#ED9121] text-[#ED9121] p-[10px] rounded-[15px]'>{t("Sections.6")}</button>
          </div>
        </div>

        <br/><br/>

        <div className='bg-white flex justify-between items-center p-[10px] w-[95%] m-auto rounded-[15px]'>
          <p>{t("Sections.4")}</p>
          <div className='flex items-center gap-[15px]'>
            <p className='text-[20px]'><b>{t("Sections.5")}</b></p>
            <button className='border border-[#ED9121] text-[#ED9121] p-[10px] rounded-[15px]'>{t("Sections.6")}</button>
          </div>
        </div>

        <br/><br/>

        <div className='bg-white flex justify-between items-center p-[10px] w-[95%] m-auto rounded-[15px]'>
          <p>{t("Sections.4")}</p>
          <div className='flex items-center gap-[15px]'>
            <p className='text-[20px]'><b>{t("Sections.5")}</b></p>
            <button className='border border-[#ED9121] text-[#ED9121] p-[10px] rounded-[15px]'>{t("Sections.6")}</button>
          </div>
        </div>

        <br/><br/>

        <div className='bg-white flex justify-between items-center p-[10px] w-[95%] m-auto rounded-[15px]'>
          <p>{t("Sections.4")}</p>
          <div className='flex items-center gap-[15px]'>
            <p className='text-[20px]'><b>{t("Sections.5")}</b></p>
            <button className='border border-[#ED9121] text-[#ED9121] p-[10px] rounded-[15px]'>{t("Sections.6")}</button>
          </div>
        </div>

        <br/><br/>

        <button className='border border-[#ED9121] text-[#ED9121] p-[10px] rounded-[15px] ml-[45%]'>{t("Sections.7")}</button>
      </div>

      <br/><br/><br/>

      <div className='bg-[#212121] text-white py-[50px]'>
        <h1 className='text-[40px] text-center'><b>{t("Sections2.1")}</b></h1>
        <br/>
        <p className='text-center'>{t("Sections2.2")}</p>
        <br/>
        <div className='flex gap-[50px] text-center m-auto sm:ml-[15%] lg:ml-[35%]'>
          <p>{t("Sections2.3")}</p>
          <p>{t("Sections2.4")}</p>
          <p>{t("Sections2.5")}</p>
          <p>{t("Sections2.6")}</p>
        </div>
        <br/><br/>
        <div className='flex justify-around items-center flex-wrap gap-[50px]'>
          <div className='flex justify-between items-center bg-white text-black w-[400px] rounded-[15px] px-[25px]'>
            <div>
              <p>{t("Sections2.3")}</p>
              <br/>
              <div className='flex items-center gap-[10px]'>
                <img src={loader} alt="" />
                <p>2</p>
              </div>
            </div>
            <div>
              <p className='text-[40px]'><b>+</b></p>
              <p className='text-[40px]'><b>-</b></p>
            </div>
          </div>

          <div className='flex justify-between items-center bg-white text-black w-[400px] rounded-[15px] px-[25px]'>
            <div>
              <p>{t("Sections2.7")}</p>
              <br/>
              <div className='flex items-center gap-[10px]'>
                <img src={loader} alt="" />
                <p>08/04/2024, 12:00</p>
              </div>
            </div>
            <div>
              <p className='text-[40px]'><b>+</b></p>
              <p className='text-[40px]'><b>-</b></p>
            </div>
          </div>

          <div className='flex justify-between items-center bg-white text-black w-[400px] rounded-[15px] px-[25px]'>
            <div>
              <p>{t("Sections2.8")}</p>
              <br/>
              <div className='flex items-center gap-[10px]'>
                <img src={loader} alt="" />
                <p>10</p>
              </div>
            </div>
            <div>
              <p className='text-[40px]'><b>+</b></p>
              <p className='text-[40px]'><b>-</b></p>
            </div>
          </div>

          <div className='flex justify-between items-center bg-white text-black w-[400px] rounded-[15px] px-[25px]'>
            <div>
              <div className='flex items-center gap-[10px]'>
                <img src={loader} alt="" />
                <p>{t("Sections2.9")}</p>
              </div>
            </div>
            <div>
              <p className='text-[40px]'><b>+</b></p>
              <p className='text-[40px]'><b>-</b></p>
            </div>
          </div>

          <div className='flex justify-between items-center bg-white text-black w-[400px] rounded-[15px] px-[25px]'>
            <div>
              <div className='flex items-center gap-[10px]'>
                <img src={loader} alt="" />
                <p>{t("Sections2.10")}</p>
              </div>
            </div>
            <div>
              <p className='text-[40px]'><b>+</b></p>
              <p className='text-[40px]'><b>-</b></p>
            </div>
          </div>

          <div className='flex justify-between items-center bg-white text-black w-[400px] rounded-[15px] px-[25px]'>
            <div>
              <div className='flex items-center gap-[10px]'>
                <img src={loader} alt="" />
                <p>{t("Sections2.11")}</p>
              </div>
            </div>
            <div>
              <p className='text-[40px]'><b>+</b></p>
              <p className='text-[40px]'><b>-</b></p>
            </div>
          </div>

          <div className='flex justify-between items-center bg-white text-black w-[400px] rounded-[15px] px-[25px] py-[20px]'>
            <p>{t("Sections2.12")}</p>
          </div>

          <div className='flex justify-between items-center bg-white text-black w-[400px] rounded-[15px] px-[25px] py-[20px]'>
            <p>+7</p>
          </div>

          <button className='bg-[#ED9121] text-white w-[400px] py-[15px] rounded-[10px]'>{t("Sections2.13")}</button>
        </div>
      </div>

      <br/><br/><br/>

      <h1 className='text-[40px] text-center'><b>{t("Sections2.14")}</b></h1>
      <br/>
      <div className='flex justify-around items-center flex-wrap gap-[50px]'>
        <img src={someone} alt="" />
        <img src={someone} alt="" />
        <img src={someone} alt="" />
        <img src={someone} alt="" />
        <img src={someone} alt="" />
      </div>

      <br/><br/><br/>

      <div className='bg-[#212121] text-white py-[50px]'>
        <div className='text-center'>
          <h1 className='text-[40px]'><b>{t("Sections3.1")}</b></h1>
          <br/>
          <p>{t("Sections3.2")}</p>
          <br/>
          <div className='flex items-center'>
            <p className='m-auto'>{t("Sections3.3")}</p>
            <p className='m-auto'>{t("Sections3.4")}</p>
            <p className='m-auto'>{t("Sections3.5")}</p>
            <p className='m-auto'>{t("Sections3.6")}</p>
            <p className='m-auto'>{t("Sections3.7")}</p>
          </div>
        </div>
        <br/><br/>
        <div className='flex justify-around items-center flex-wrap gap-[50px]'>
          <img src={video2} alt="" className='lg:w-[450px]'/>
          <img src={video} alt=""className='lg:w-[450px]' />
          <img src={video3} alt="" className='lg:w-[450px]'/>
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

      <br/><br/><br/>

      <div className='bg-[#dfdfdfaa] text-center py-[50px]'>
        <h1 className='text-[40px]'><b>{t("Sections4.1")}</b></h1>
        <br/><br/>
        <div className='flex justify-around items-center flex-wrap gap-[50px] text-center px-[100px]'>
          <button className='border bg-white py-[10px] px-[25px] rounded-[10px]'>{t("Sections4.2")}</button>
          <button className='border bg-white py-[10px] px-[25px] rounded-[10px]'>{t("Sections4.3")}</button>
          <button className='border bg-white py-[10px] px-[25px] rounded-[10px]'>{t("Sections4.4")}</button>
          <button className='border bg-white py-[10px] px-[25px] rounded-[10px]'>{t("Sections4.5")}</button>
          <button className='border bg-white py-[10px] px-[25px] rounded-[10px]'>{t("Sections4.6")}</button>
          <button className='border bg-white py-[10px] px-[25px] rounded-[10px]'>{t("Sections4.7")}</button>
          <button className='border bg-white py-[10px] px-[25px] rounded-[10px]'>{t("Sections4.8")}</button>
          <button className='border bg-white py-[10px] px-[25px] rounded-[10px]'>{t("Sections4.9")}</button>
          <button className='border bg-white py-[10px] px-[25px] rounded-[10px]'>{t("Sections4.10")}</button>
          <button className='border bg-white py-[10px] px-[25px] rounded-[10px]'>{t("Sections4.11")}</button>
          <button className='border bg-white py-[10px] px-[25px] rounded-[10px]'>{t("Sections4.12")}</button>
          <button className='border bg-white py-[10px] px-[25px] rounded-[10px]'>{t("Sections4.13")}</button>
          <button className='border bg-white py-[10px] px-[25px] rounded-[10px]'>{t("Sections4.14")}</button>
          <button className='border bg-white py-[10px] px-[25px] rounded-[10px]'>{t("Sections4.15")}</button>
          <button className='border bg-white py-[10px] px-[25px] rounded-[10px]'>{t("Sections4.16")}</button>
          <button className='border bg-white py-[10px] px-[25px] rounded-[10px]'>{t("Sections4.17")}</button>
        </div>
      </div>

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

      <div className='bg-[#dfdfdfaa] py-[50px] text-center'>
        <h1 className='text-[40px]'><b>{t("Sections5.1")}</b></h1>
        <br/>
        <p className='text-[22px]'><b>{t("Sections5.2")}</b></p>
        <br/>
        <p>{t("Sections5.3")}</p>
        <br/><br/>
        <div className='bg-white flex justify-between items-center p-[10px] w-[95%] m-auto rounded-[15px]'>
          <p>{t("Sections.4")}</p>
          <p className='text-[25px]'><b>+</b></p>
        </div>

        <br/><br/>

        <div className='bg-white flex justify-between items-center p-[10px] w-[95%] m-auto rounded-[15px]'>
          <p>{t("Sections.4")}</p>
          <p className='text-[25px]'><b>+</b></p>
        </div>

        <br/><br/>
        
        <div className='bg-white flex justify-between items-center p-[10px] w-[95%] m-auto rounded-[15px]'>
          <p>{t("Sections.4")}</p>
          <p className='text-[25px]'><b>+</b></p>
        </div>

        <br/><br/>
        
        <div className='bg-white flex justify-between items-center p-[10px] w-[95%] m-auto rounded-[15px]'>
          <p>{t("Sections.4")}</p>
          <p className='text-[25px]'><b>+</b></p>
        </div>

        <br/><br/>
        
        <div className='bg-white flex justify-between items-center p-[10px] w-[95%] m-auto rounded-[15px]'>
          <p>{t("Sections.4")}</p>
          <p className='text-[25px]'><b>+</b></p>
        </div>

        <br/><br/>
        
        <div className='bg-white flex justify-between items-center p-[10px] w-[95%] m-auto rounded-[15px]'>
          <p>{t("Sections.4")}</p>
          <p className='text-[25px]'><b>+</b></p>
        </div>

        <br/><br/>

        <button className='border border-[#ED9121] text-[#ED9121] p-[10px] rounded-[15px] ml-[8%]'>{t("Sections.7")}</button>
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

      <div className='bg-[#dfdfdfaa] py-[50px] sm:px-[25px] lg:px-[50px] text-center'>
        <h1 className='text-[40px]'><b>{t("Sections5.5")}</b></h1>
        <br/>
        <p className='text-justify'>{t("Sections5.6")}</p>
        <br/><br/>
        <p className='text-justify'>{t("Sections5.7")}</p>
      </div>
    </div>
  )
}

export default Home