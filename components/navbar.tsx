import Link from "next/link"

export default function Navbar(): any {
    return (
        <header className='main-header'>
        <Link href='/'>
            <h3 className='title-header'>Social Mockida</h3>
        </Link> 
        <section className='userOptions'>
        <h4 className='login-header'>Login</h4>
        <h4 className='signup-header'>Sign Up</h4>
        </section>
      </header>
    )
}