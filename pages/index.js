import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className='container m-auto'>
      <section className='p-5 flex flex-col justify-end h-[80vh] hero-section rounded-md'>
        <h2 className='text-[2rem]'>Hello,</h2>
        <p className='text-[1.3rem]'>
          my name is eyad karim, I'm beginner front end programer, I like programing wesites and I learned some programing languages HTML, Css, Javascript, React, Nextjs, Python
        </p>
      </section>
      <section className='mt-5'>
        <h3 className='text-[2rem]'>Thank you all</h3>
        <ul>
          <li>elzero web school</li>
          <li>codezilla</li>
          <li>Hassouna Academy</li>
        </ul>
      </section>
     </div>
    </>
  )
}
