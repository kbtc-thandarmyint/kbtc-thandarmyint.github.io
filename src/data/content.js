// ============================================================
// All site copy lives here — edit this file to update the site.
// ============================================================

export const NAV_LINKS = [
  { no: '01', label: 'About', href: '#about' },
  { no: '02', label: 'Method', href: '#method' },
  { no: '03', label: 'Training', href: '#training' },
  { no: '04', label: 'Credentials', href: '#credentials' },
  { no: '05', label: 'Contact', href: '#contact' },
]

export const STATS = [
  { value: 3, pad: 2, label: 'Years coaching' },
  { value: 60, suffix: '+', label: 'Clients trained' },
  { value: 1400, suffix: '+', label: 'KG lost & gained' },
  { value: 6, pad: 2, label: 'Certifications' },
]

export const TICKER_ITEMS = [
  'Body Transformation',
  'Strength & Conditioning',
  'Kettlebells',
  'Movement Restoration',
  '1-on-1 Coaching',
]

export const METHOD_STEPS = [
  { no: '01', name: 'Assess', desc: 'Movement screen, training history, baseline numbers. We start from facts, not guesses.' },
  { no: '02', name: 'Program', desc: 'A training block built for your goal — sets, loads, and nutrition targets in writing.' },
  { no: '03', name: 'Train', desc: 'Coached sessions with strict standards. Technique earns load — always in that order.' },
  { no: '04', name: 'Measure', desc: 'Weekly check-ins and honest numbers. The data decides the next block, not the mood.' },
]

export const SERVICES = [
  {
    no: '01',
    name: '1-on-1 Personal Training',
    ref: 'REF — CPT · SR-CPT03240207',
    desc: 'Fully individualized coaching: assessment, programming, and hands-on form correction in every session.',
    img: './assets/pullup-back-gym.jpg',
    pos: 'center 40%',
  },
  {
    no: '02',
    name: 'Body Transformation',
    ref: 'REF — FEA BTS L1 & 2 · BTS/MM/2023/10/404',
    desc: 'Structured cut, recomp, and muscle-building programs with nutrition guidance you can actually keep.',
    img: './assets/abs-mountain-reveal.jpg',
    pos: 'center 45%',
  },
  {
    no: '03',
    name: 'Strength & Conditioning',
    ref: 'REF — S&C COACH · CIFA 2022',
    desc: 'Barbell technique, progressive overload, and athletic performance built on functional anatomy.',
    img: './assets/flex-cave-stairs.jpg',
    pos: 'center 35%',
  },
  {
    no: '04',
    name: 'Kettlebell & Functional',
    ref: 'REF — FTI KETTLEBELLS L1 · FUNCTIONAL TOOLS',
    desc: 'Kettlebells, suspension, battle ropes, and powerbags — strength that carries over outside the gym.',
    img: './assets/detail-forearm.jpg',
    pos: 'center 35%',
  },
  {
    no: '05',
    name: 'Movement Restoration',
    ref: 'REF — MRC™ · REHAB TRAINER',
    desc: 'Pain-free movement, posture correction, and injury-aware programming that respects your history.',
    img: './assets/treadmill-cardio.jpg',
    pos: 'center 30%',
  },
]

export const GALLERY = [
  { img: './assets/flex-summit-flags.jpg', cap: 'Summit flex — Hpa-An mountaintop', w: 960, h: 1280 },
  { img: './assets/pullup-back-gym.jpg', cap: 'Pull-up — back detail at the gym', w: 960, h: 1280 },
  { img: './assets/abs-mountain-reveal.jpg', cap: 'Abs reveal — mountain hike', w: 960, h: 1706 },
  { img: './assets/flex-misty-peak.jpg', cap: 'Bicep flex — misty peak', w: 960, h: 1706 },
  { img: './assets/flex-cave-stairs.jpg', cap: 'Physique — cave stairway', w: 960, h: 1706 },
  { img: './assets/summit-stand-scenic.jpg', cap: 'Summit stand — scenic overlook', w: 960, h: 1706 },
  { img: './assets/treadmill-cardio.jpg', cap: 'Cardio session — treadmill', w: 960, h: 1280 },
  { img: './assets/mountain-view-chill.jpg', cap: 'Off duty — mountain view', w: 960, h: 1280 },
  { img: './assets/chest-abs-detail.png', cap: 'Chest & abs — gym detail', w: 618, h: 360 },
  { img: './assets/smart-casual-lobby.jpg', cap: 'Smart casual — evening out', w: 960, h: 1706 },
]

export const CERTS = [
  {
    no: '01',
    date: '22 DEC 2022',
    issuer: 'City International Fitness Academy × Rehab Trainer',
    name: 'Movement Restoration Coach (MRC™)',
    detail: 'Rehab-informed coaching methodology under Rehab Trainer founder Ulrik Larson.',
    id: null,
    img: './assets/cert-mrc.png',
  },
  {
    no: '02',
    date: '27 DEC 2022',
    issuer: 'Functional Training Institute (FTI) · ACE-approved · ESSA',
    name: 'Kettlebells Level 1',
    detail: 'Fundamentals of Kettlebell Training — completed face-to-face, 8 CECs.',
    id: null,
    img: './assets/cert-kettlebell-l1.png',
  },
  {
    no: '03',
    date: '27 DEC 2022',
    issuer: 'City International Fitness Academy — Educator: Zayar Tun Phyu',
    name: 'Strength & Conditioning Coach',
    detail: 'Lifting technique, application of functional anatomy, and the science of strength.',
    id: null,
    img: './assets/cert-strength-conditioning.png',
  },
  {
    no: '04',
    date: '20 JAN 2024',
    issuer: 'FEA — Fitness Edutraining Asia · ACE-approved · NASM provider',
    name: 'Body Transformation Specialist L1 & L2',
    detail: 'Structured body-recomposition programming and transformation coaching.',
    id: 'BTS/MM/2023/10/404',
    img: './assets/cert-fea-bts.png',
  },
  {
    no: '05',
    date: '06 MAR 2024',
    issuer: 'Functional Training Institute (FTI) · ACE-approved',
    name: 'Functional Tools Coach',
    detail: 'Kettlebells, suspended fitness, battling ropes and powerbag programming.',
    id: null,
    img: './assets/cert-functional-tools.png',
  },
  {
    no: '06',
    date: '24 MAR 2024',
    issuer: 'City International Fitness Academy',
    name: 'Certified Personal Trainer',
    detail: 'Function · Health · Fitness · Performance.',
    id: 'SR-CPT03240207',
    img: './assets/cert-cpt.png',
  },
]

export const QUOTES = [
  { text: 'Lost 11 kg in four months without giving up rice. The programming just made sense.', who: 'A.K. · Body Transformation' },
  { text: 'First coach who fixed my shoulder pain instead of training around it.', who: 'M.T. · Movement Restoration' },
  { text: 'Added 40 kg to my deadlift in one season. Every session had a reason.', who: 'Z.L. · Strength & Conditioning' },
]

export const CONTACT_LINKS = [
  { label: 'Instagram', href: 'https://www.instagram.com/hein___zaw/', icon: 'instagram' },
  { label: 'Facebook', href: 'https://www.facebook.com/hein.zaw.798938', icon: 'facebook' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@hein.zaw9403', icon: 'tiktok' },
  { label: 'Email', href: 'mailto:heinlay128@gmail.com', icon: 'email', solid: true },
]

export const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://www.instagram.com/hein___zaw/' },
  { label: 'Facebook', href: 'https://www.facebook.com/hein.zaw.798938' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@hein.zaw9403' },
  { label: 'Email', href: 'mailto:heinlay128@gmail.com' },
]
