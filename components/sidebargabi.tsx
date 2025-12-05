import Link from "next/link"

export default function SidebarGabi() {
  return (
    <>
      {/* Desktop layout - sidebar */}
      <div className="hidden lg:flex fixed left-0 top-0 h-screen w-[30%] bg-[#F6F4F4] flex-col justify-between p-8 overflow-hidden">
        {/* Top section with title */}
        <div className="flex flex-col">
          <Link href="/" className="cursor-pointer hover:opacity-80 transition-opacity">
            <div className="m3-label text-foreground mb-[42px]">PORTFOLIO // 2026</div>
          </Link>
          <div className="font-sans font-regular text-[48px] leading-tight text-foreground my-[-0] leading-[1.1rem]">
            Maryam
            <br />
            Tufail
          </div>
        </div>

        {/* Bottom section with bio and links */}
        <div className="flex flex-col space-y-6">

          <p className="font-sans font-light text-[18px] leading-relaxed text-foreground">
            A freelancer focusing heavily on design & development based in Pakistan. Create products that make people say, oh damn!
          </p>


          <div className="flex items-start flex-row gap-4">
            <Link
              href="/about"
              className="font-sans font-light text-[18px] text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="font-sans font-light text-[18px] text-foreground hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="/testimonials"
              className="font-sans font-light text-[16px] md:text-[18px] text-foreground hover:text-primary transition-colors"
            >
              Testimonials
            </Link>
            <a className="font-sans font-light text-[18px] text-foreground hover:text-primary transition-colors" href="http://linkedin.com/maryamtufaill" target="_blank" rel="noopener noreferrer">Contact</a>


          </div>
        </div>
      </div>

      <div className="lg:hidden bg-[#F6F4F4] p-6 space-y-6">
        {/* Top section with title */}
        <div className="space-y-4">
          <Link href="/" className="cursor-pointer hover:opacity-80 transition-opacity">
            <div className="m3-label text-foreground">PORTFOLIO // 2026</div>
          </Link>
          <div className="font-sans font-regular text-[32px] md:text-[40px] leading-tight text-foreground">
            Maryam Tufail
          </div>
        </div>

        {/* Bio text */}
        <p className="font-sans font-light text-[18px] leading-relaxed text-foreground">
          A freelancer focusing heavily on design & development based in Pakistan. Create products that make people say, oh damn!
        </p>

        <div className="flex space-x-4">

          <Link
            href="/about"
            className="font-sans font-light text-[16px] md:text-[18px] text-foreground hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="/services"
            className="font-sans font-light text-[16px] md:text-[18px] text-foreground hover:text-primary transition-colors"
          >
            Services
          </Link>
          <Link
            href="/testimonials"
            className="font-sans font-light text-[16px] md:text-[18px] text-foreground hover:text-primary transition-colors"
          >
            Testimonials
          </Link>
           <a className="font-sans font-light text-[18px] text-foreground hover:text-primary transition-colors" href="https://www.linkedin.com/in/maryamtufaill" target="_blank" rel="noopener noreferrer">Contact</a>

        </div>
      </div>
    </>
  )
}
