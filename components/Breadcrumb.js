import Link from 'next/link'

export default function Breadcrumb({ items, dark = false }) {
  const base = dark
    ? 'text-white/50 hover:text-white/80'
    : 'text-gray-400 hover:text-[#C73664]'
  const active = dark ? 'text-white/90 font-medium' : 'text-[#C73664] font-medium'
  const chevron = dark ? 'text-white/30' : 'text-gray-300'

  return (
    <nav aria-label="Breadcrumb" className="py-2">
      <ol
        className="flex items-center flex-wrap gap-1.5 text-xs"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <Link href="/" className={`transition-colors ${base}`} itemProp="item">
            <span itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-center gap-1.5"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <svg
              className={`w-2.5 h-2.5 flex-shrink-0 ${chevron}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
            {item.href ? (
              <Link
                href={item.href}
                className={`transition-colors ${base}`}
                itemProp="item"
              >
                <span itemProp="name">{item.label}</span>
              </Link>
            ) : (
              <span className={active} itemProp="name">
                {item.label}
              </span>
            )}
            <meta itemProp="position" content={String(i + 2)} />
          </li>
        ))}
      </ol>
    </nav>
  )
}
