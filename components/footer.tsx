import Link from 'next/link'
import Container from '../components/container'

export default function Footer() {
  return (
    <footer className="py-6 footer-wrapper">
      <Container>
        <nav className='footer-links'>
          <Link href="/help">Help</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </nav>
      </Container>
    </footer>
  )
}
