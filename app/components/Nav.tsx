import Link from "next/link";

function Nav(){
    return(
        <div>
            <nav>
                <ul><Link href={'/'}>Home</Link></ul>
                <ul><Link href={'/contact-us'}>Contact Us</Link></ul>
            </nav>
        </div>
    )
}
export default Nav;