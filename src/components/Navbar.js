import Link from "next/link"
import Image from "next/image";
export default function Navbar() {
  return (
    <nav>
        <div className="logo">
          <Link href="/">
          <Image src="/logo512.png" width={50} height={50} alt="logo" />
          </Link>
            
        </div>
        <Link href="/">หน้าแรก</Link>
        <Link href="/products">สินค้า</Link>
        <Link href="/about">เกี่ยวกับเรา</Link>
        
    </nav>
  )
}

