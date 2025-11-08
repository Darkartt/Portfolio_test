import { Navbar } from '@/components/common/Navbar'
import { Footer } from '@/components/common/Footer'
import { AnimatedBackground } from '@/components/animations/AnimatedBackground'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <AnimatedBackground variant="full" />
      <Navbar />
      <main className="relative">{children}</main>
      <Footer />
    </>
  )
}
