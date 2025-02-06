"use client";

import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-primary/10">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.jpg"
              alt="Isodomi Logo"
              width={140}
              height={40}
              className="dark:invert w-20"
            />
          </Link>



          {/* Company Info */}
          <div className="text-muted-foreground space-y-2">
            <p>© 2025 Isodomi | KvK 94082286 | BTW NL866629191B01</p>
          </div>
        </div>

      </div>
    </footer>
  );
} 