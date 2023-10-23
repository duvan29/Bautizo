
import Image from 'next/image';
import { Images } from '@/assets/img';
import CountDown from '@/components/CountDown';



export default function Home() {
  

  return (
    <main className="flex min-h-screen flex-col min-w-screen items-center py-24 px-5 bg-white">
      <div className='relative'>
        <div className="w-[270px] h-[270px] ml-[30px] mt-[7px] overflow-hidden z-0 absolute">
          <Image className='rounded-full' src={Images.img.lia} layout="fill" objectFit="cover" alt="Lia" />
        </div>
        <div className="w-[350px] h-[300px] overflow-hidden z-100">
          <Image src={Images.img.border} layout="fill" objectFit="cover" alt="Borde" />
        </div>
      </div>
      <div>
        <h4 className='text-center max-w-xs mt-[35px]'>Tenemos el gusto de invitarte al bautizo de nuestra pequeña hija</h4>
        <h1 className='text-center mt-[35px]'>Lia Paez</h1>
      </div>
        <div className="">
          <div className="flex items-center justify-between mt-[35px]">
            <h2 className='border-t-2 border-b-2 md:text-[30px] ms:text-[20px] border-[#F288AF] '>SABADO</h2>
            <div className='flex justify-center items-center flex-col mx-[20px]'>
              <h2 className='md:text-[40px] ms:text-[35px]'>25 </h2>
              <h2 className='md:text-[30px] ms:text-[25px]'>Diciembre</h2>
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
            <p className='ms:text-[15px] md:text-[20px]'>Jeferson Paez</p>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center mt-[35px]'>
          <h2 className='text center mb-[20px]'>LLUVIA DE SOBRES</h2>
          <Image src={Images.img.sobre} width={100} height={100} alt="Sobre" />
        </div>
        <h3 className='text-center mt-[35px] text-[30px]'>Ubicación</h3>
        <div className='flex justify-around  mt-[35px]'>
          <div className='flex flex-col items-center justify-center'>
              <h3>Recepción</h3>
              <div>
                <button className="border-[#A67D4B] border-2 text-white p-4 rounded-full flex items-center justify-center m-5">
                  <svg xmlns="http://www.w3.org/2000/svg" 
                  height="1em" 
                  viewBox="0 0 576 512"
                  className="w-8 h-8"
                  fill="#A67D4B"
                  ><path d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>
                </button>
              </div>
            <span>Calle 7 # 68a - 96</span><br/>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h3>Misa</h3>
              <div>
                <button className="border-[#A67D4B] border-2 text-white p-4 rounded-full flex items-center justify-center m-5">
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                height="1em" 
                viewBox="0 0 448 512"
                fill="#A67D4B"
                className='w-8 h-8'><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                </button>
              </div>
            <span>+57 318 400136</span><br/>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <h3>Asistencia</h3>
              <div>
                <button className="border-[#A67D4B] border-2 text-white p-4 rounded-full flex items-center justify-center m-5">
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                height="1em" 
                viewBox="0 0 448 512"
                fill="#A67D4B"
                className='w-8 h-8'><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                </button>
              </div>
            <span>+57 318 400136</span><br/>
          </div>
      </div>
    </main>
  );
}
