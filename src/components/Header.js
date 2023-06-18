import Image from 'next/image' 
import Link from 'next/link'
import Logo from '/images/logo.svg'

const Header = (props) => {
    return (
        <div className='flex flex-row py-10 justify-between items-center'>
            <div className='w-20'> 
                <Image
              src={Logo}
              alt="Logo"
             />
            </div>
             
            <div className=''>
                <ul className='flex flex-row justify-center'>
                    <li>
                        <Link href='/' className='flex-1 px-6'>Home</Link>
                    </li>
                    <li>
                        <Link href='/about' className='flex-1 px-6'>What is GPT?</Link>
                    </li>
                    <li>
                        <Link href='/open-ai' className='flex-1 px-6'>Open AI</Link>
                    </li>
                    <li>
                        <Link href='/case-studies' className='flex-1 px-6'>Case Studies</Link>
                    </li>
                    <li>
                        <Link href='/library' className='flex-1 px-6'>Library</Link>
                    </li>
                </ul>
            </div>

            <div className='flex flex-row justify-end items-center'>
                <p>Sign In</p>
                <div className='rounded-md bg-rose-600 border-8 px-4 border-rose-600 ml-10'><button>Sign Up</button></div>
            </div>
        </div>
    )
}

export default Header