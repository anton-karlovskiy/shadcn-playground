import Link from "next/link"

export default function Home() {
  const pages = [
    { href: "/carousel", label: "Carousel" },
    { href: "/sidebar", label: "Sidebar" },
    { href: "/table", label: "Table" },
    { href: "/tabs", label: "Tabs" },
    { href: "/separator", label: "Separator" },
    { href: "/spinner", label: "Spinner" },
  ]

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="mb-8 text-4xl font-bold">shadcn Playground</h1>
      <nav className="flex flex-col gap-4">
        {pages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="rounded-md border bg-card px-6 py-4 text-card-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            {page.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}
