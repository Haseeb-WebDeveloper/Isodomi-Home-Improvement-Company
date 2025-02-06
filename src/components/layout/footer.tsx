"use client";

import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-primary/10">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Logo */}
          <Image
            src="/logo.jpg"
            alt="Isodomi Logo"
            width={140}
            height={40}
            className="dark:invert"
          />

          {/* Company Info */}
          <div className="text-muted-foreground space-y-2">
            <p>© 2025 Isodomi | KvK 81924117 | BTW NL81924117B01</p>
            <p>Werkgebied: heel Nederland</p>
          </div>
        </div>

      </div>
    </footer>
  );
} 