import Link from "next/link"

const contactMethods = [
  {
    label: "Email",
    value: "abiyyuajh@gmail.com",
    href: "mailto:abiyyuajh@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "Abiyyu Aryasena",
    href: "https://www.linkedin.com/in/abiyyu-aryasena-271425385/",
  },
  {
    label: "GitHub",
    value: "github.com/abiyyu",
    href: "https://github.com",
  },
]

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-20"
      aria-label="Contact"
    >
      <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Contact
          </h2>
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Let&apos;s Collaborate
          </span>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h3 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Let&apos;s Connect
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              I&apos;m open to project discussions, collaborations, and professional opportunities.
              If you want to discuss ideas or potential work, feel free to reach out through any of the channels below.
            </p>
            <div className="mt-6">
              <Link
                href="mailto:abiyyuajh@gmail.com"
                className="inline-flex items-center justify-center bg-primary px-6 py-2.5 text-xs font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:opacity-90"
              >
                Send Email
              </Link>
            </div>
          </div>

          <div className="grid gap-3">
            {contactMethods.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer noopener"
                className="border border-border bg-background p-3 transition-colors hover:border-primary"
              >
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{item.label}</p>
                <p className="mt-1 text-sm font-medium text-foreground">{item.value}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
