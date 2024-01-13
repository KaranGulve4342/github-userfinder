import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex min-h-screen w-full bg-stone-100 p-1.5 sm:pt-12 pt-10 sm:12 transition-all">
      
    {/* container */}
      <div className='border mx-auto flex w-full max-w-[600px] flex-col gap-8 rounded p-2'>
        <section className='flex justify-between gap-3'>
            <p className='text-xl font-semibold'>GitHub Userfinder</p>
            <p>Light</p>
        </section>
      </div>
      
    </div>
  )
}
