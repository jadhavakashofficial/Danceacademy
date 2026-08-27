// data/upcomingEvent.js
// Single source of truth for the currently promoted event.
// The site-wide popup and the Events page both read from here.
// When `endsAt` passes, the popup stops showing automatically — no code change needed.

export const upcomingEvent = {
  id: 'kathak-nrutyadhara-2026',
  title: 'Kathak Nrutyadhara 2026',
  titleMarathi: 'कथक नृत्यधारा २०२६',
  presenter: 'Sanchay Kathak Nrutya Academy',
  conductedBy: 'Sau. Vaishali Palsule (Dhongade) & Rajashree Dhongade',
  chiefGuestNote: 'In the presence of Pt. Dr. Nandkishor Kapote',
  guests: [
    'Shri. Bhausaheb Bhoir',
    'Shrimati Ashwini Chinchwade',
    'Sau. Indrayani Mate (Pisolkar)',
  ],
  accompanists: [
    { role: 'Tabla', name: 'Shri. Santosh Salve' },
    { role: 'Sarangi', name: 'Shri. Tanish Salve' },
    { role: 'Samvadini & Vocals', name: 'Shri. Shrirang Tembe' },
    { role: 'Bansuri', name: 'Shri. Azharuddin Shaikh' },
    { role: 'Anchoring', name: 'Shalmali Joshi' },
  ],
  dateLabel: '31st August 2026, Monday',
  timeLabel: '5:00 PM onwards',
  seatingNote: 'Kindly be seated by 4:45 PM',
  venue: 'Prof. Ramkrishna More Auditorium',
  venueArea: 'Chinchwad, Pune',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Prof.+Ramkrishna+More+Auditorium+Chinchwad+Pune',
  phone: '7507234753',
  poster: '/images/kathak-nrutyadhara-2026.jpg',
  entry: 'Open to all',
  // ISO 8601 with IST offset
  startsAt: '2026-08-31T17:00:00+05:30',
  // Popup keeps showing to every visitor until this moment passes.
  endsAt: '2026-08-31T23:59:59+05:30',
}

export function isEventUpcoming(now = new Date()) {
  return now.getTime() < new Date(upcomingEvent.endsAt).getTime()
}
