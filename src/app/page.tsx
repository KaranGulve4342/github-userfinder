import Image from 'next/image'
import DarkAndLightBtn from './components/DarkAndLigntBtn'

export default function Home() {
  return (
    <div className="flex min-h-screen w-full bg-stone-100 p-1.5 sm:pt-12 pt-10 sm:12 transition-all dark:bg-slate-900">
      
    {/* container */}
      <div className='border mx-auto flex w-full max-w-[600px] flex-col gap-8 rounded p-2'>
        <section className='flex justify-between gap-3'>
            <p className='text-xl font-semibold'>GitHub Userfinder</p>
            <DarkAndLightBtn />
        </section>

        {/* search and main */}
        <section>
          {/* search and btn */}
          <main></main>
        </section>
      </div>
      
    </div>
  )
}
