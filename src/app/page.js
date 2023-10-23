import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="relative">
        <div className="w-32 h-32 rounded-full overflow-hidden">
          <Image src="/public/borde.png" layout="fill" objectFit="cover" alt="Borde" />
        </div>
        <div className="w-32 h-32 rounded-full overflow-hidden -mt-32">
          <Image src="/public/lia.jpg" layout="fill" objectFit="cover" alt="Lia" />
        </div>
      </div>
      <div>
        <p className='text-center max-w-xs'>Tenemos el gusto de invitarte al bautizo de nuestra pequeña hija</p>
        <h1 className='text-center'>Lia Paez</h1>
      </div>
        <div className="">
          <div className="flex items-center justify-between">
            <div className='border-t border-b'>Sábado</div>
            <div className='flex justify-center items-center flex-col'>
              <div>25 </div>
              <div>Diciembre</div>
            </div>
            <div className='border-t border-b'>10:00am</div>
          </div>
        <div className="flex">
          <div className="w-1/3">
            <h3>Papás:</h3>
            <p>Aledxa Rojas</p>
          </div>
          <Image src="/papas.jpg" width={100} height={100} alt="Papás" />
          <div className="w-1/3">
            <h3>Padrinos:</h3>
          </div>
        </div>
        <div>
          <button style={{ background: '#F2B6C6' }}>Ubicación</button>
          <button style={{ background: '#F288AF' }}>Asistencia</button>
          <i className="fab fa-whatsapp" style={{ color: '#A67D4B' }}></i>
        </div>
        <div>
          <p>Lluvia de sobres</p>
          <Image src="/sobre.jpg" width={100} height={100} alt="Sobre" />
        </div>
      </div>
    </main>
  );
}
