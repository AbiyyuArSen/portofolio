import Link from "next/link"

export function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-muted-foreground sm:pb-0">
      <p>
        Didesain dan dikembangkan oleh saya sendiri. Dibangun dengan{" "}
        <Link
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground transition-colors hover:text-primary"
        >
          Next.js
        </Link>{" "}
        dan{" "}
        <Link
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground transition-colors hover:text-primary"
        >
          Tailwind CSS
        </Link>
        , di-deploy dengan{" "}
        <Link
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground transition-colors hover:text-primary"
        >
          Vercel
        </Link>
        .
      </p>
    </footer>
  )
}
