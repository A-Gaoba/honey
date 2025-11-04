"use client"

import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-4">
      <ol className="flex items-center gap-2 text-sm text-muted-foreground" itemScope itemType="https://schema.org/BreadcrumbList">
        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <Link
            href="/"
            itemProp="item"
            className="hover:text-foreground transition-colors"
          >
            <span itemProp="name">الرئيسية</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>
      </ol>
    </nav>
  )
}

