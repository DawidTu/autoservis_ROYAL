// link
import Link from "next/link";

export default function Copyright() {
  // current year
  const getCurrentYear = () => new Date().getFullYear();
  return (
    <div className='flex flex-col justify-center border-t py-10 text-center text-sm md:text-base'>
        <div className="text-muted-foreground flex justify-center gap-x-8 pb-2">
            <p>&copy; {getCurrentYear()} - Martin Čulen</p>
              <div className='border-b border border-muted-foreground rotate-180'></div>
              <p className='text-muted-foreground justify-center'>Website by <Link className='hover:text-primary-foreground duration-500' href="/">David Tuma</Link></p>
          </div>
          <Link href="/" className='text-muted-foreground text-xs md:text-sm underline underline-offset-4 hover:text-primary duration-500'>
            Podmienky ochrany osobných údajov
          </Link>
      </div>
  )
}
