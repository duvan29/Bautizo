
import Image from 'next/image';
import { Images } from '@/assets/img';
import CountDown from '@/components/CountDown';
import Link from 'next/link';



export default function Home() {
  

  return (
    <>
      <main className={`flex flex-col min-w-screen items-center pt-24 pb-5 px-5 bg-[#fff1e5]`}>
        <div className='relative'>
          <div className="w-[270px] h-[270px] ml-[30px] mt-[7px] overflow-hidden z-0 absolute">
            <Image className='rounded-full' src={Images.img.lia} layout="fill" objectFit="cover" alt="Lia" />
          </div>
          <div className="w-[350px] h-[300px] overflow-hidden z-100">
            <Image src={Images.img.border} layout="fill" objectFit="cover" alt="Borde" />
          </div>
        </div>
        <div>
          <h5 className='text-center mt-[35px] text-[#240B06]'>Mi Bautizo</h5>
          <h1 className='text-center mt-[35px]'>Lia Violeta Paez Rojas</h1>
          <p className='text-center ms:max-w-full md:max-w-[600px] mt-[35px] text-[#240B06] ms:text-[15px] md:text-[20px]'>Señor hoy me presentaran ante ti para ser bañada con la gracia de tu amor, toma mi pequeño corazón entre tus benditas manos y jamás te separes de mi.</p>
        </div>
          <div className="">
            <div className="flex items-center justify-between mt-[35px]">
              <h2 className='border-t-2 border-b-2 md:text-[30px] ms:text-[20px] border-[#F288AF] '>SABADO</h2>
              <div className='flex justify-center items-center flex-col mx-[20px]'>
                <h2 className='md:text-[40px] ms:text-[35px]'>11</h2>
                <h2 className='md:text-[30px] ms:text-[25px]'>Noviembre</h2>
              </div>
              <h2 className='border-t-2 border-b-2 md:text-[30px] ms:text-[20px] border-[#F288AF]'>10:00AM</h2>
            </div>
            <CountDown/>
          <div className="flex justify-evenly mt-[35px] md:w-[450px] ms:w-full">
            <div className="w-1/3 flex flex-col justify-center items-center">
              <h3 className='mb-[10px]'>PAPÁS</h3>
              <p className='ms:text-[15px] md:text-[20px]'>Aledxa Rojas</p>
              <p className='ms:text-[15px] md:text-[20px]'>Robinson Paez</p>
            </div>
            <div className='w-[80px] h-[80px] flex justify-center items-center'>
              <Image src={Images.img.paloma} objectFit="cover" alt="paloma" />
            </div>
            <div className="w-1/3 flex flex-col justify-center items-center">
              <h3 className='mb-[10px]'>PADRINOS</h3>
              <p className='ms:text-[15px] md:text-[20px]'>Liliana Rojas</p>
              <p className='ms:text-[15px] md:text-[20px]'>Jehisson Paez</p>
            </div>
          </div>
          <h3 className='text-center mt-[35px] text-[30px]'>UBICACIÓN</h3>
          <div className='flex md:justify-between ms:items-center ms:flex-col md:flex-row  mt-[10px] mb-[30px]'>
            <div className='flex flex-col items-center justify-center md:max-w-[140px] ms:max-w-[250px]'>
              <h4>Misa</h4>
                <div className='flex justify-center items-center '>
                  <div className="border-[#A67D4B] border-2 text-white p-4 rounded-full flex items-center justify-center m-5">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"
                  className="w-8 h-8"
                  fill="#A67D4B"><path d="M344 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V48H264c-13.3 0-24 10.7-24 24s10.7 24 24 24h32v46.4L183.3 210c-14.5 8.7-23.3 24.3-23.3 41.2V512h96V416c0-35.3 28.7-64 64-64s64 28.7 64 64v96h96V251.2c0-16.9-8.8-32.5-23.3-41.2L344 142.4V96h32c13.3 0 24-10.7 24-24s-10.7-24-24-24H344V24zM24.9 330.3C9.5 338.8 0 354.9 0 372.4V464c0 26.5 21.5 48 48 48h80V273.6L24.9 330.3zM592 512c26.5 0 48-21.5 48-48V372.4c0-17.5-9.5-33.6-24.9-42.1L512 273.6V512h80z"/></svg>
                  </div>
                </div>
              <span className=' text-center'>parroquia san pedro de usme</span><br/>
              <h4 className='border-t-2 border-b-2 border-[#A67D4B]'>10:00AM</h4>
            </div>
            <div className='flex flex-col items-center justify-center md:max-w-[140px] ms:max-w-[250px] mt-[18px]'>
                <h4>Recepción</h4>
                <div>
                  <div className="border-[#A67D4B] border-2 text-white p-4 rounded-full flex items-center justify-center m-5">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" className="w-8 h-8"
                  fill="#A67D4B"><path d="M86.4 5.5L61.8 47.6C58 54.1 56 61.6 56 69.2V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.2c0-7.6-2-15-5.8-21.6L105.6 5.5C103.6 2.1 100 0 96 0s-7.6 2.1-9.6 5.5zm128 0L189.8 47.6c-3.8 6.5-5.8 14-5.8 21.6V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.2c0-7.6-2-15-5.8-21.6L233.6 5.5C231.6 2.1 228 0 224 0s-7.6 2.1-9.6 5.5zM317.8 47.6c-3.8 6.5-5.8 14-5.8 21.6V72c0 22.1 17.9 40 40 40s40-17.9 40-40V69.2c0-7.6-2-15-5.8-21.6L361.6 5.5C359.6 2.1 356 0 352 0s-7.6 2.1-9.6 5.5L317.8 47.6zM128 176c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c-35.3 0-64 28.7-64 64v71c8.3 5.2 18.1 9 28.8 9c13.5 0 27.2-6.1 38.4-13.4c5.4-3.5 9.9-7.1 13-9.7c1.5-1.3 2.7-2.4 3.5-3.1c.4-.4 .7-.6 .8-.8l.1-.1 0 0 0 0s0 0 0 0s0 0 0 0c3.1-3.2 7.4-4.9 11.9-4.8s8.6 2.1 11.6 5.4l0 0 0 0 .1 .1c.1 .1 .4 .4 .7 .7c.7 .7 1.7 1.7 3.1 3c2.8 2.6 6.8 6.1 11.8 9.5c10.2 7.1 23 13.1 36.3 13.1s26.1-6 36.3-13.1c5-3.5 9-6.9 11.8-9.5c1.4-1.3 2.4-2.3 3.1-3c.3-.3 .6-.6 .7-.7l.1-.1c3-3.5 7.4-5.4 12-5.4s9 2 12 5.4l.1 .1c.1 .1 .4 .4 .7 .7c.7 .7 1.7 1.7 3.1 3c2.8 2.6 6.8 6.1 11.8 9.5c10.2 7.1 23 13.1 36.3 13.1s26.1-6 36.3-13.1c5-3.5 9-6.9 11.8-9.5c1.4-1.3 2.4-2.3 3.1-3c.3-.3 .6-.6 .7-.7l.1-.1c2.9-3.4 7.1-5.3 11.6-5.4s8.7 1.6 11.9 4.8l0 0 0 0 0 0 .1 .1c.2 .2 .4 .4 .8 .8c.8 .7 1.9 1.8 3.5 3.1c3.1 2.6 7.5 6.2 13 9.7c11.2 7.3 24.9 13.4 38.4 13.4c10.7 0 20.5-3.9 28.8-9V288c0-35.3-28.7-64-64-64V176c0-17.7-14.3-32-32-32s-32 14.3-32 32v48H256V176c0-17.7-14.3-32-32-32s-32 14.3-32 32v48H128V176zM448 394.6c-8.5 3.3-18.2 5.4-28.8 5.4c-22.5 0-42.4-9.9-55.8-18.6c-4.1-2.7-7.8-5.4-10.9-7.8c-2.8 2.4-6.1 5-9.8 7.5C329.8 390 310.6 400 288 400s-41.8-10-54.6-18.9c-3.5-2.4-6.7-4.9-9.4-7.2c-2.7 2.3-5.9 4.7-9.4 7.2C201.8 390 182.6 400 160 400s-41.8-10-54.6-18.9c-3.7-2.6-7-5.2-9.8-7.5c-3.1 2.4-6.8 5.1-10.9 7.8C71.2 390.1 51.3 400 28.8 400c-10.6 0-20.3-2.2-28.8-5.4V480c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32V394.6z"/></svg>
                  </div>
                </div>
              <span className=' text-center'> Finca famir paez (vereda chiguaza-usme)</span><br/>
              <h4 className='border-t-2 border-b-2 border-[#A67D4B]'>10:00AM</h4>
            </div>
          </div>
          <h3 className='text-center mt-[10px] text-[30px]'>ASISTENCIA</h3>
          <div className='flex flex-col items-center justify-center '>
                <div>
                  <Link
                  href="https://api.whatsapp.com/send?phone=573184001366&text=Hola%2C%20quiero%20confirmar%20mi%20asistencia%20somos%20la%20familia%0A%0AAdultos%3A%20%0A%0ANi%C3%B1os%3A%0A" 
                  target="_blank"
                  className="border-[#A67D4B] border-2 text-white p-4 rounded-full flex items-center justify-center m-5">
                  <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  height="1em" 
                  viewBox="0 0 448 512"
                  fill="#A67D4B"
                  className='w-8 h-8'><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                  </Link>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#A67D4B" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                </svg>
                <h4>Click Me</h4>
          <div className='flex flex-col justify-center items-center mt-[35px] pb-24'>
            <h2 className='text center mb-[20px]'>LLUVIA DE SOBRES</h2>
            <Image src={Images.img.sobre} width={100} height={100} alt="Sobre" />
          </div>
            </div>
        </div>
      </main>
      
    </>
  );
}
