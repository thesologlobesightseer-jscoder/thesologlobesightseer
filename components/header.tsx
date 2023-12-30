import Link from 'next/link'
import Container from '../components/container'
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  return (
    <header className="py-6">
      <Container>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tighter leading-tight md:pr-8 logo">
          <Link href="/">THESOLOGLOBESIGHTSEER</Link>
        </h1>
        <nav className="flex space-x-4 menu-bar">
          <Link href="/about" className={router.pathname == "/about" ? "active" : "menu"}>About</Link>
          <Link href="/posts" className={router.pathname == "/posts" ? "active" : "menu"}>Posts</Link>
          <Link href="/contact" className={router.pathname == "/contact" ? "active" : "menu"}>Contact Us</Link>
        </nav>
      </Container>
    </header>
  )
}
