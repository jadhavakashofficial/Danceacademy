// components/EventPopup.js
import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { upcomingEvent, isEventUpcoming } from '../data/upcomingEvent'

// Shown once per browser session, on every page of the site,
// to every visitor — until upcomingEvent.endsAt has passed.
const SESSION_KEY = `sk-event-seen:${upcomingEvent.id}`

export default function EventPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isEventUpcoming()) return

    let alreadySeen = false
    try {
      alreadySeen = window.sessionStorage.getItem(SESSION_KEY) === '1'
    } catch {
      // private mode / storage blocked — just show it
    }
    if (alreadySeen) return

    const timer = setTimeout(() => setIsOpen(true), 900)
    return () => clearTimeout(timer)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
    try {
      window.sessionStorage.setItem(SESSION_KEY, '1')
    } catch {
      // ignore
    }
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') close()
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, close])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-[fadeIn_0.25s_ease-out]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="event-popup-title"
      onClick={close}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto overflow-x-hidden rounded-2xl bg-[#120608] shadow-2xl ring-1 ring-[#E7B84F]/30 animate-[popIn_0.3s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close announcement"
          className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/60 text-white ring-1 ring-white/25 hover:bg-[#C73664] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Poster */}
          <div className="min-w-0 bg-black flex items-center justify-center">
            <Image
              src={upcomingEvent.poster}
              alt={`${upcomingEvent.title} — ${upcomingEvent.dateLabel}, ${upcomingEvent.venue}`}
              width={1303}
              height={1600}
              priority
              className="max-w-full h-auto max-h-[46vh] sm:max-h-none w-auto sm:w-full object-contain"
            />
          </div>

          {/* Details */}
          <div className="min-w-0 p-5 sm:p-6 text-white flex flex-col">
            <span className="inline-flex items-center self-start gap-1.5 rounded-full bg-[#C73664] px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Upcoming Event
            </span>

            <h2 id="event-popup-title" className="mt-3 text-2xl sm:text-3xl font-extrabold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E7B84F] to-[#C73664]">
                {upcomingEvent.title}
              </span>
            </h2>
            <p className="mt-1 text-sm text-[#E7B84F]">{upcomingEvent.titleMarathi}</p>

            <p className="mt-3 text-sm text-gray-300">
              Presented by <span className="font-semibold text-white">{upcomingEvent.presenter}</span>
              <br />
              <span className="text-gray-400">{upcomingEvent.conductedBy}</span>
            </p>

            <dl className="mt-4 space-y-2.5 text-sm">
              <div className="flex items-start gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#E7B84F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <dd className="font-semibold">{upcomingEvent.dateLabel}</dd>
              </div>
              <div className="flex items-start gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#E7B84F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <dd className="font-semibold">{upcomingEvent.timeLabel}</dd>
              </div>
              <div className="flex items-start gap-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#E7B84F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <dd>
                  <span className="font-semibold">{upcomingEvent.venue}</span>
                  <br />
                  <span className="text-gray-400">{upcomingEvent.venueArea}</span>
                </dd>
              </div>
            </dl>

            <p className="mt-4 rounded-lg bg-[#E7B84F]/10 px-3 py-2 text-xs text-[#E7B84F] ring-1 ring-[#E7B84F]/25">
              {upcomingEvent.seatingNote} · {upcomingEvent.entry}
            </p>

            <p className="mt-3 text-sm text-gray-300">
              Do come and grace the occasion with your presence. 🙏
            </p>

            <div className="mt-auto pt-5 flex flex-col gap-2">
              <a
                href={upcomingEvent.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#C73664] to-[#B300B3] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
              >
                Get Directions
              </a>
              <div className="flex gap-2">
                <a
                  href={`tel:+91${upcomingEvent.phone}`}
                  className="flex-1 inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold text-white ring-1 ring-white/25 hover:bg-white/10 transition-colors"
                >
                  Call {upcomingEvent.phone}
                </a>
                <Link
                  href="/events"
                  onClick={close}
                  className="flex-1 inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold text-white ring-1 ring-white/25 hover:bg-white/10 transition-colors"
                >
                  Event Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes popIn {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  )
}
