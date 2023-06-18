'use client'
import Header from '/src/components/Header'
import styles from './styles'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '/images/logo.svg'
import OpenAI from '/images/ai.png'
import People from '/images/people.png'
import Google from '/images/google.png'
import Slack from '/images/slack.png'
import Atlassian from '/images/atlassian.png'
import Dropbox from '/images/dropbox.png'
import Shopify from '/images/shopify.png'
import Possibility from '/images/possibility.png'
import Image1 from '/images/blog01.png'
import Image2 from '/images/blog02.png'
import Image3 from '/images/blog03.png'
import Image4 from '/images/blog04.png'
import Image5 from '/images/blog05.png'

const Home = () => {
  return (
  <body>
    <main className='body'>
        <style jsx>
        {styles}
        </style>

        {/* HEADER */}
        <div>
          <Header /> 
        </div>

        {/* HERO */}
        <section>
          <div className=' flex flex-row'>
            <div className='flex flex-col w-1/2 mt-16 pr-1'>
              <h1 className='text-6xl font-semibold leading-none'>Let's Build Something Amazing With GPT-3 Open AI</h1> 
              <p className='p mt-10'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

              <div className='w-auto flex flex-row mt-10 justify-start'>
              <input type="email" name="email" className="random-bg px-4 py-3 no-border shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-700 focus:ring-sky-500 block w-full rounded-l-md sm:text-sm focus:ring-1" placeholder="Your Email Address" />
              <div className='rounded-r-md bg-rose-600 border-2 p-4 border-rose-600 w-1/4 text-center'><button>Get Started</button></div>
              </div>

              <div className='mt-10 flex flex-row justify-start items-center'>
                <Image
                src={People}
                alt="Contributors"
              />
              <span className='text-white text-xs ml-3'>1,600 people requested access a visit in last 24 hours</span>
              </div>
            </div>

            <div className='w-1/2 flex flex-row justify-end max-w-2xl pl-10'>
              <Image
                  src={OpenAI}
                  alt="Open AI"
                />
            </div>
          </div>
        </section>

        {/* SOCIAL */}
        <section className='flex flex-row justify-center mt-24 mb-32'>
          <Image
            className='mx-6'
            src={Google}
            alt="Google"
          />
          <Image
            className='mx-6'
            src={Slack}
            alt="Slack"
          />
          <Image
            className='mx-6'
            src={Atlassian}
            alt="Atlassian"
          />
          <Image
            className='mx-6'
            src={Dropbox}
            alt="Dropbox"
          />
          <Image
            className='mx-6'
            src={Shopify}
            alt="Shopify"
          />
        </section>

        {/* WHAT IS GPT-3 */}
        <section className='bg-blue-950 p-14'>
          <div className='flex flex-row mb-24'>
            <divider className='rect'></divider>
            <h4 className='text-2xl font-semibold w-1/2 mt-4'>What is GPT-3</h4>
            <p className='p pl-32 pr-10 text-sm leading-7'>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
          </div>

          <div className='flex flex-row justify-between mb-20 items-center'>
            <h3 className='text-4xl font-bold'>The possibilities are beyond <br /> your imagination</h3>
            <span className='mr-6 orange'><Link href='#'>Explore The Library</Link></span>
          </div>

          <div className='flex flex-row'>
            <div className='pr-8'>
              <divider className='rect'></divider>
              <h4 className='text-xl font-semibold mt-4 mb-10'>Chatbots</h4>
              <p className='p leading-7 text-sm'>We so opinion friends me message as delight. Whole front do of plate heard oh ought.</p>
            </div>

            <div className='px-6'>
              <divider className='rect'></divider>
              <h4 className='text-xl font-semibold mt-4 mb-10'>Knowledge Base</h4>
              <p className='p leading-7 text-sm'>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments.</p>
            </div>

            <div className='px-6'>
              <divider className='rect'></divider>
              <h4 className='text-xl font-semibold mt-4 mb-10'>Education</h4>
              <p className='p leading-7 text-sm'>At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments.</p>
            </div>
          </div>
        </section>

        {/* THE FUTURRE IS NOW */}
        <section className='pt-28 mt-10 flex flex-row justify-between'>
          <div className='pr-24 w-2/3'>
            <h2 className='text-4xl font-bold pb-10 leading-10'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h2>
            <p className='orange  text-sm'>Request Early Access to Get Started</p>
          </div>

          <div className=' items-end flex flex-col'>
            <div className='flex flex-row justify-between mb-10'>
              <divider className='rect'></divider>
              <h4 className='mt-2 pr-32'>Improving end distrusts instantly</h4>
              <p className='p w-1/2 text-sm'>From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.</p>
            </div>
            <div className='flex flex-row justify-between mb-10'>
              <divider className='rect'></divider>
              <h4 className='mt-2 pr-32'>Become the tended active</h4>
              <p className='p w-1/2 text-sm'>Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.</p>
            </div>
            <div className='flex flex-row justify-between mb-10'>
              <divider className='rect'></divider>
              <h4 className='mt-2 pr-32'>Message or am nothing</h4>
              <p className='p w-1/2 text-sm'>Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.</p>
            </div>
            <div className='flex flex-row justify-between mb-10'>
              <divider className='rect'></divider>
            <h4 className='mt-2 pr-32'>Really boy law county</h4>
            <p className='p w-1/2 text-sm'>Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.</p>
            </div>
          </div>
        </section>

        {/* REQUEST ACCESS */}
        <section className='flex flex-row justify-between mb-24'>
          <div className='w-2/5 h-1/3'>
            <Image
            className='mr-6 w-auto'
            src={Possibility}
            alt="Possibility"
            />
          </div>

          <div className='w-1/2 flex flex-col justify-end items-start mb-8'>
            <p className='p text-xs mb-4'>Request Early Access to Get Started</p>
            <h3 className='font-bold text-4xl mb-8'>The possibilities are <br /> beyond your imagination</h3>
            <p className='p w-3/4 leading-7 mb-8 text-sm'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
            <p className='orange text-xs'>Request Early Access to Get Started</p>
          </div>
        </section>

        {/* REGISTER */}
        <section className='banner rounded-lg py-10 px-14 mb-32'>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-col'>
              <p className='text-xs mb-3'>Request Early Access to Get Started</p>
              <h4 className='font-bold text-gray-950 text-2xl'>Register today & start exploring the endless possiblities.</h4>
            </div>
            <button className='rounded-full px-8 text-center bg-gray-950'>Get Started</button>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className='pb-28'>
          <h1 className='text-6xl font-semibold leading-tight mb-20'>A lot is happening, <br/> We are blogging about it.</h1>

          <div className='grid grid-cols-3 gap-12'>
            <div className='row-span-3'>
              <Image
              src={Image1}
              alt='blog1'
              />
              <div className='grid p-8 bg-blue-950 h-3/5'>
                <p className='text-xs'>Sep 26, 2021</p>
                <p className='text-xl self-start font-bold'>GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
                <p className='text-xs self-end'>Read Full Article</p>
              </div>
            </div>

            <div>
              <Image 
              src={Image2}
              alt='blog2'
              />
              <div className='grid p-8 bg-blue-950 h-48'>
                <p className='text-xs'>Sep 26, 2021</p>
                <p className='text-xl self-start font-bold'>GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
                <p className='text-xs self-end'>Read Full Article</p>
              </div>
            </div>
            <div>
              <Image 
              src={Image3}
              alt='blog3'
              />
              <div className='grid p-8 bg-blue-950 h-48'>
                <p className='text-xs'>Sep 26, 2021</p>
                <p className='text-xl self-start font-bold'>GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
                <p className='text-xs self-end'>Read Full Article</p>
              </div>
            </div>
            <div>
              <Image 
              src={Image4}
              alt='blog4'
              />
              <div className='grid px-8 pt-8 pb-7 bg-blue-950 h-48'>
                <p className='text-xs'>Sep 26, 2021</p>
                <p className='text-xl self-start font-bold'>GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
                <p className='text-xs self-end'>Read Full Article</p>
              </div>
            </div>
            <div>
              <Image 
              src={Image5}
              alt='blog5'
              />
              <div className='grid px-8 pt-8 pb-7 bg-blue-950 h-48'>
                <p className='text-xs'>Sep 26, 2021</p>
                <p className='text-xl self-start font-bold'>GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
                <p className='text-xs self-end'>Read Full Article</p>
              </div>
            </div>
          </div>
        </section>
    </main>

    {/* FOOTER */}
    <footer className='footer pt-32 pb-10'>
      <div>
      <div className='flex flex-col items-center justify-center px-32'>
        <h1 className='font-bold text-6xl orange leading-tight text-center'>Do you want to step in to the <br/> future before others</h1>
        <span  className='mt-12 border-2 border-white-950 py-4 px-8'><Link href='#'>Request Early Access</Link></span>
      </div>

      <div className='pt-36 px-36 grid grid-cols-5'>
        <div className='col-span-2'>
          <Image 
          src={Logo}
          alt='Logo'
          className='w-24 mb-6'
          />
          <p className='text-xs'>Crechterwoord K12 182 DK <br/> Alknjkcb, All Rights Reserved</p>
        </div>

        <div className='grid grid-col'>
          <span  className='text-md mb-8 font-bold'><Link href='#'>Links</Link></span>
          <span  className='text-xs mb-6'><Link href='#'>Overons</Link></span>
          <span  className='text-xs mb-6'><Link href='#'>Social Media</Link></span>
          <span  className='text-xs mb-6'><Link href='#'>Counters</Link></span>
          <span  className='text-xs'><Link href='#'>Contact</Link></span>
        </div>

        <div className='grid grid-col'>
          <span  className='text-md mb-8 font-bold'><Link href='#'>Company</Link></span>
          <span  className='text-xs mb-6'><Link href='#'>Terms & Conditions</Link></span>
          <span  className='text-xs mb-6'><Link href='#'>Privacy Policy</Link></span>
          <span  className='text-xs mb-6'><Link href='#'>Contact</Link></span>
        </div>

        <div className='grid grid-col'>
          <span  className='text-md mb-8 font-bold'><Link href='#'>Get In Touch</Link></span>
          <span  className='text-xs mb-6'><Link href='#'>Crechterwoord K12 <br/> 182 DK Alknjkcb</Link></span>
          <span  className='text-xs mb-6'><Link href='#'>085-132567</Link></span>
          <span  className='text-xs mb-6'><Link href='#'>info@payme.net</Link></span>
        </div>
        </div>
      </div>

      <span>
        <p className='pt-20 text-xs text-center'>© 2021 GPT-3. All rights reserved.</p>
      </span>
    </footer>
  </body>
  )
}

export default Home
