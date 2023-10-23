import Image from 'next/image';
import { Images } from '@/assets/img';

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
            <h2 className='border-t-2 border-b-2 border-[#F288AF] '>SABADO</h2>
            <div className='flex justify-center items-center flex-col'>
              <h2 className=' text-[40px]'>25 </h2>
              <h2>Diciembre</h2>
            </div>
            <h2 className='border-t-2 border-b-2 border-[#F288AF]'>10:00AM</h2>
          </div>
        <div className="flex justify-evenly mt-[35px] w-[500px]">
          <div className="w-1/3 flex flex-col justify-center items-center">
            <h3>PAPÁS</h3>
            <p>Aledxa Rojas</p>
            <p>Robinson Paez</p>
          </div>
          <div className='w-[80px] h-[80px] flex justify-center items-center'>
            <Image src={Images.img.paloma} objectFit="cover" alt="paloma" />
          </div>
          <div className="w-1/3 flex flex-col justify-center items-center">
            <h3>PADRINOS</h3>
            <p>Liliana Rojas</p>
            <p>Jeferson Paez</p>
          </div>
        </div>
        <div className='flex justify-around  mt-[35px]'>
          <div className='flex flex-col items-center justify-center'>
            <h3>Ubicación</h3>
              <div>
                <span>logo</span>
              </div>
            <span>Calle 7 # 68a - 96</span><br/>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h3>Asistencia</h3>
              <div>
                <span>logo</span>
              </div>
            <span>Calle 7 # 68a - 96</span><br/>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h2 className='text center'>Lluvia de sobres</h2>
          <Image src="" width={100} height={100} alt="Sobre" />
        </div>
      </div>
    </main>
  );
}
