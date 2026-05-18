import React from 'react';

// Tiny inline classNames helper so this file has no dependencies beyond
// React. Drop it and use your own `cn` / `clsx` / `classnames` if you
// already have one.
function cn(...inputs: Array<string | false | null | undefined>): string {
  return inputs.filter(Boolean).join(' ');
}

interface ActivityIllustrationProps {
  activityId: string;
  isCelebrating?: boolean;
  className?: string;
}

function normalizeId(id: string): string {
  return id.toLowerCase().replace(/[\s_-]+/g, '-');
}

const GradientDefs = () => (
  <defs>
    <radialGradient id="cg-rose" cx="35%" cy="30%">
      <stop offset="0%" stopColor="#FFE0DD" />
      <stop offset="100%" stopColor="#FF8FA0" />
    </radialGradient>
    <radialGradient id="cg-peach" cx="35%" cy="30%">
      <stop offset="0%" stopColor="#FFE7CF" />
      <stop offset="100%" stopColor="#FFB37A" />
    </radialGradient>
    <radialGradient id="cg-sky" cx="35%" cy="30%">
      <stop offset="0%" stopColor="#DEEAFB" />
      <stop offset="100%" stopColor="#7AA8E6" />
    </radialGradient>
    <radialGradient id="cg-mint" cx="35%" cy="30%">
      <stop offset="0%" stopColor="#D9F4E0" />
      <stop offset="100%" stopColor="#82D097" />
    </radialGradient>
    <radialGradient id="cg-butter" cx="35%" cy="30%">
      <stop offset="0%" stopColor="#FFF1B8" />
      <stop offset="100%" stopColor="#FFC53D" />
    </radialGradient>
    <radialGradient id="cg-lavender" cx="35%" cy="30%">
      <stop offset="0%" stopColor="#E8DEFF" />
      <stop offset="100%" stopColor="#A989E6" />
    </radialGradient>
    <radialGradient id="cg-gold" cx="35%" cy="30%">
      <stop offset="0%" stopColor="#FFE57A" />
      <stop offset="100%" stopColor="#C4A24D" />
    </radialGradient>
  </defs>
);

type IllustrationSet = { idle: React.ReactNode; happy: React.ReactNode };

const ILLUSTRATIONS: Record<string, IllustrationSet> = {
  call: {
    idle: (
      <>
        <ellipse cx="32" cy="58" rx="22" ry="3" fill="#3A2A2A" opacity="0.12" />
        <rect x="18" y="10" width="28" height="46" rx="6" fill="url(#cg-sky)" stroke="#355A99" strokeWidth="2" />
        <rect x="22" y="16" width="20" height="34" rx="2" fill="#E2EEFB" />
        <rect x="28" y="12" width="8" height="2" rx="1" fill="#355A99" />
        <circle cx="32" cy="53" r="2" fill="#355A99" />
        <ellipse cx="28" cy="28" rx="1.5" ry="2" fill="#3A2A2A" />
        <ellipse cx="36" cy="28" rx="1.5" ry="2" fill="#3A2A2A" />
        <circle cx="28.5" cy="27" r="0.5" fill="white" />
        <circle cx="36.5" cy="27" r="0.5" fill="white" />
        <path d="M28 36c1.5 1.5 5 1.5 6.5 0" stroke="#3A2A2A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </>
    ),
    happy: (
      <>
        <ellipse cx="32" cy="58" rx="22" ry="3" fill="#3A2A2A" opacity="0.12" />
        <path d="M10 26c-3-3-3-9 0-12" stroke="#FFD64D" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M14 28c-2-2-2-6 0-8" stroke="#FFD64D" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M54 26c3-3 3-9 0-12" stroke="#FFD64D" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M50 28c2-2 2-6 0-8" stroke="#FFD64D" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <g transform="rotate(-7 32 32)">
          <rect x="18" y="10" width="28" height="46" rx="6" fill="url(#cg-sky)" stroke="#355A99" strokeWidth="2" />
          <rect x="22" y="16" width="20" height="34" rx="2" fill="#E2EEFB" />
          <rect x="28" y="12" width="8" height="2" rx="1" fill="#355A99" />
          <circle cx="32" cy="53" r="2" fill="#355A99" />
          <path d="M25 28c1 -1.5 4 -1.5 5 0" stroke="#3A2A2A" strokeWidth="1.6" strokeLinecap="round" fill="none" />
          <path d="M34 28c1 -1.5 4 -1.5 5 0" stroke="#3A2A2A" strokeWidth="1.6" strokeLinecap="round" fill="none" />
          <path d="M25 36c2 3 10 3 12 0c-2 1.5-4 2-6 2s-4-.5-6-2z" fill="#FF6B8E" stroke="#3A2A2A" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M32 22c-.8-1.4-2.8-1.4-3 .3-.3 1.6 1.6 2.6 3 3.4 1.4-.8 3.3-1.8 3-3.4-.2-1.7-2.2-1.7-3-.3z" fill="#FF6B8E" />
        </g>
      </>
    ),
  },
  set: {
    idle: (
      <>
        <ellipse cx="32" cy="58" rx="20" ry="3" fill="#3A2A2A" opacity="0.12" />
        <rect x="14" y="14" width="3" height="8" rx="1.5" fill="#7A3D33" />
        <rect x="47" y="14" width="3" height="8" rx="1.5" fill="#7A3D33" />
        <rect x="10" y="20" width="44" height="34" rx="9" fill="url(#cg-rose)" />
        <path d="M10 28a9 9 0 019-9h26a9 9 0 019 9v3H10v-3z" fill="#FF8FA0" opacity="0.7" />
        <ellipse cx="24" cy="38" rx="1.8" ry="2.4" fill="#3A2A2A" />
        <ellipse cx="36" cy="38" rx="1.8" ry="2.4" fill="#3A2A2A" />
        <circle cx="24.7" cy="37" r="0.7" fill="white" />
        <circle cx="36.7" cy="37" r="0.7" fill="white" />
        <path d="M27 44c1.5 2 5.5 2 7 0" stroke="#3A2A2A" strokeWidth="1.7" strokeLinecap="round" fill="none" />
        <circle cx="48" cy="50" r="6" fill="url(#cg-gold)" />
      </>
    ),
    happy: (
      <>
        <ellipse cx="32" cy="58" rx="20" ry="3" fill="#3A2A2A" opacity="0.12" />
        <rect x="14" y="14" width="3" height="8" rx="1.5" fill="#7A3D33" />
        <rect x="47" y="14" width="3" height="8" rx="1.5" fill="#7A3D33" />
        <rect x="10" y="20" width="44" height="34" rx="9" fill="url(#cg-rose)" />
        <path d="M10 28a9 9 0 019-9h26a9 9 0 019 9v3H10v-3z" fill="#FF8FA0" opacity="0.7" />
        <path d="M20 38c1.5 -2 4.5 -2 6 0" stroke="#3A2A2A" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M32 38c1.5 -2 4.5 -2 6 0" stroke="#3A2A2A" strokeWidth="2" strokeLinecap="round" fill="none" />
        <circle cx="19" cy="44" r="2.4" fill="#FF6B8E" opacity="0.6" />
        <circle cx="42" cy="44" r="2.4" fill="#FF6B8E" opacity="0.6" />
        <path d="M25 43c2 4 10 4 12 0c-2 1.5-4 2.5-6 2.5s-4-1-6-2.5z" fill="#FF6B8E" stroke="#3A2A2A" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M48 14c-1-2-4-2-4 .5 0 2 2 3.5 4 4.5 2-1 4-2.5 4-4.5 0-2.5-3-2.5-4-.5z" fill="#FF6B8E" stroke="white" strokeWidth="1.4" />
      </>
    ),
  },
  story: {
    idle: (
      <>
        <ellipse cx="32" cy="58" rx="22" ry="3" fill="#3A2A2A" opacity="0.12" />
        <path d="M10 20c0-2 2-4 4-4h18v36H14c-2 0-4-2-4-4V20z" fill="url(#cg-butter)" stroke="#A68A3A" strokeWidth="1.6" />
        <path d="M54 20c0-2-2-4-4-4H32v36h18c2 0 4-2 4-4V20z" fill="url(#cg-butter)" stroke="#A68A3A" strokeWidth="1.6" />
        <line x1="32" y1="16" x2="32" y2="52" stroke="#7A5A2E" strokeWidth="2" />
        <line x1="16" y1="24" x2="28" y2="24" stroke="#A68A3A" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="16" y1="30" x2="28" y2="30" stroke="#A68A3A" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="16" y1="36" x2="28" y2="36" stroke="#A68A3A" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="36" y1="24" x2="48" y2="24" stroke="#A68A3A" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="36" y1="30" x2="48" y2="30" stroke="#A68A3A" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="36" y1="36" x2="48" y2="36" stroke="#A68A3A" strokeWidth="1.2" strokeLinecap="round" />
        <ellipse cx="22" cy="46" rx="1.4" ry="1.8" fill="#3A2A2A" />
        <ellipse cx="42" cy="46" rx="1.4" ry="1.8" fill="#3A2A2A" />
        <path d="M27 49c1 1 4 1 5 0" stroke="#3A2A2A" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      </>
    ),
    happy: (
      <>
        <ellipse cx="32" cy="58" rx="22" ry="3" fill="#3A2A2A" opacity="0.12" />
        <path d="M14 10l1.5 3 3 1.5-3 1.5-1.5 3-1.5-3-3-1.5 3-1.5z" fill="#FFD64D" />
        <path d="M50 8l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" fill="#FF6B8E" />
        <path d="M32 4l1.5 3 3 1.5-3 1.5-1.5 3-1.5-3-3-1.5 3-1.5z" fill="url(#cg-rose)" />
        <path d="M10 20c0-2 2-4 4-4h18v36H14c-2 0-4-2-4-4V20z" fill="url(#cg-butter)" stroke="#A68A3A" strokeWidth="1.6" />
        <path d="M54 20c0-2-2-4-4-4H32v36h18c2 0 4-2 4-4V20z" fill="url(#cg-butter)" stroke="#A68A3A" strokeWidth="1.6" />
        <line x1="32" y1="16" x2="32" y2="52" stroke="#7A5A2E" strokeWidth="2" />
        <path d="M22 28c-1.5-2-4.5-2-5 .5-.5 2.5 2.5 4.5 5 6 2.5-1.5 5.5-3.5 5-6-.5-2.5-3.5-2.5-5-.5z" fill="#FF6B8E" stroke="#C44263" strokeWidth="1.2" />
        <path d="M37 28c.8 -1.5 3.2 -1.5 4 0" stroke="#3A2A2A" strokeWidth="1.6" strokeLinecap="round" fill="none" />
        <path d="M44 28c.8 -1.5 3.2 -1.5 4 0" stroke="#3A2A2A" strokeWidth="1.6" strokeLinecap="round" fill="none" />
        <path d="M37 40c1.5 3 8.5 3 10 0c-1.5 1.5-3.5 2-5 2s-3.5-.5-5-2z" fill="#FF6B8E" stroke="#3A2A2A" strokeWidth="1.4" strokeLinejoin="round" />
      </>
    ),
  },
  roleplay: {
    idle: (
      <>
        <ellipse cx="32" cy="58" rx="22" ry="3" fill="#3A2A2A" opacity="0.12" />
        <circle cx="16" cy="36" r="10" fill="url(#cg-peach)" />
        <ellipse cx="13" cy="36" rx="1.4" ry="1.8" fill="#3A2A2A" />
        <ellipse cx="19" cy="36" rx="1.4" ry="1.8" fill="#3A2A2A" />
        <path d="M14 40c.7 1 2.3 1 3 0" stroke="#3A2A2A" strokeWidth="1.4" strokeLinecap="round" fill="none" />
        <circle cx="48" cy="36" r="10" fill="url(#cg-sky)" />
        <ellipse cx="45" cy="36" rx="1.4" ry="1.8" fill="#3A2A2A" />
        <ellipse cx="51" cy="36" rx="1.4" ry="1.8" fill="#3A2A2A" />
        <path d="M46 40c.7 1 2.3 1 3 0" stroke="#3A2A2A" strokeWidth="1.4" strokeLinecap="round" fill="none" />
        <ellipse cx="26" cy="18" rx="9" ry="6" fill="white" stroke="#7A5A2E" strokeWidth="1.6" />
        <path d="M22 23l-2 4 5-1z" fill="white" stroke="#7A5A2E" strokeWidth="1.6" strokeLinejoin="round" />
        <text x="26" y="21" fontSize="9" fontWeight="900" textAnchor="middle" fill="#7A5A2E">…</text>
        <ellipse cx="38" cy="54" rx="9" ry="6" fill="white" stroke="#355A99" strokeWidth="1.6" />
        <path d="M42 49l2-4-5 1z" fill="white" stroke="#355A99" strokeWidth="1.6" strokeLinejoin="round" />
        <text x="38" y="57" fontSize="9" fontWeight="900" textAnchor="middle" fill="#355A99">…</text>
      </>
    ),
    happy: (
      <>
        <ellipse cx="32" cy="58" rx="22" ry="3" fill="#3A2A2A" opacity="0.12" />
        <circle cx="16" cy="36" r="10" fill="url(#cg-peach)" />
        <path d="M11 36c.6 -1.6 3 -1.6 3.6 0" stroke="#3A2A2A" strokeWidth="1.6" strokeLinecap="round" fill="none" />
        <path d="M18 36c.6 -1.6 3 -1.6 3.6 0" stroke="#3A2A2A" strokeWidth="1.6" strokeLinecap="round" fill="none" />
        <path d="M13 40c1 1.5 5 1.5 6 0" stroke="#3A2A2A" strokeWidth="1.4" strokeLinecap="round" fill="none" />
        <circle cx="48" cy="36" r="10" fill="url(#cg-sky)" />
        <path d="M43 36c.6 -1.6 3 -1.6 3.6 0" stroke="#3A2A2A" strokeWidth="1.6" strokeLinecap="round" fill="none" />
        <path d="M50 36c.6 -1.6 3 -1.6 3.6 0" stroke="#3A2A2A" strokeWidth="1.6" strokeLinecap="round" fill="none" />
        <path d="M45 40c1 1.5 5 1.5 6 0" stroke="#3A2A2A" strokeWidth="1.4" strokeLinecap="round" fill="none" />
        <ellipse cx="26" cy="18" rx="9" ry="6" fill="white" stroke="#FF6B8E" strokeWidth="1.8" />
        <path d="M22 23l-2 4 5-1z" fill="white" stroke="#FF6B8E" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M26 15c-.8-1.4-3.2-1.4-3.4.3-.3 1.8 1.8 3 3.4 3.7 1.6-.7 3.7-1.9 3.4-3.7-.2-1.7-2.6-1.7-3.4-.3z" fill="#FF6B8E" />
        <ellipse cx="38" cy="54" rx="9" ry="6" fill="white" stroke="#FFD64D" strokeWidth="1.8" />
        <path d="M42 49l2-4-5 1z" fill="white" stroke="#FFD64D" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M38 51l1.4 2.6 3-.2-2 1.9.5 3L38 57l-2.9 1.3.5-3-2-1.9 3 .2z" fill="#FFD64D" />
      </>
    ),
  },
  referral: {
    idle: (
      <>
        <ellipse cx="32" cy="58" rx="22" ry="3" fill="#3A2A2A" opacity="0.12" />
        <path d="M32 8c-1.6-2.4-5.4-2.4-6 .6-.6 3 3.2 5.8 6 7.4 2.8-1.6 6.6-4.4 6-7.4-.6-3-4.4-3-6-.6z" fill="url(#cg-rose)" />
        <circle cx="20" cy="38" r="13" fill="url(#cg-peach)" />
        <circle cx="44" cy="38" r="13" fill="url(#cg-sky)" />
        <ellipse cx="17" cy="38" rx="1.6" ry="2.2" fill="#3A2A2A" />
        <ellipse cx="23" cy="38" rx="1.6" ry="2.2" fill="#3A2A2A" />
        <path d="M18 42c.7 1 2.3 1 3 0" stroke="#3A2A2A" strokeWidth="1.4" strokeLinecap="round" fill="none" />
        <ellipse cx="41" cy="38" rx="1.6" ry="2.2" fill="#3A2A2A" />
        <ellipse cx="47" cy="38" rx="1.6" ry="2.2" fill="#3A2A2A" />
        <path d="M42 42c.7 1 2.3 1 3 0" stroke="#3A2A2A" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      </>
    ),
    happy: (
      <>
        <ellipse cx="32" cy="58" rx="22" ry="3" fill="#3A2A2A" opacity="0.12" />
        <path d="M32 8c-2-3-6-3-7 .8-.7 4 4 6.5 7 8.2 3-1.7 7.7-4.2 7-8.2-1-3.8-5-3.8-7-.8z" fill="#FF6B8E" stroke="white" strokeWidth="1.6" />
        <path d="M14 12c-1-1.6-3.6-1.6-3.8.4-.3 2 2 3.4 3.8 4.2 1.8-.8 4-2.2 3.8-4.2-.2-2-2.8-2-3.8-.4z" fill="#FF6B8E" />
        <path d="M50 12c-1-1.6-3.6-1.6-3.8.4-.3 2 2 3.4 3.8 4.2 1.8-.8 4-2.2 3.8-4.2-.2-2-2.8-2-3.8-.4z" fill="#FF6B8E" />
        <circle cx="20" cy="40" r="13" fill="url(#cg-peach)" />
        <circle cx="44" cy="40" r="13" fill="url(#cg-sky)" />
        <path d="M15 40c1.5 -2 4 -2 5.5 0" stroke="#3A2A2A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M22 40c1.5 -2 4 -2 5.5 0" stroke="#3A2A2A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M39 40c1.5 -2 4 -2 5.5 0" stroke="#3A2A2A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M46 40c1.5 -2 4 -2 5.5 0" stroke="#3A2A2A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M16 45c2 3 6 3 8 0" stroke="#3A2A2A" strokeWidth="1.6" strokeLinecap="round" fill="none" />
        <path d="M40 45c2 3 6 3 8 0" stroke="#3A2A2A" strokeWidth="1.6" strokeLinecap="round" fill="none" />
        <circle cx="28" cy="54" r="4" fill="url(#cg-peach)" stroke="#7A4F2B" strokeWidth="1.4" />
        <circle cx="36" cy="54" r="4" fill="url(#cg-sky)" stroke="#355A99" strokeWidth="1.4" />
      </>
    ),
  },
  'social-media-post': {
    idle: (
      <>
        <ellipse cx="32" cy="58" rx="22" ry="3" fill="#3A2A2A" opacity="0.12" />
        <rect x="14" y="10" width="36" height="42" rx="5" fill="url(#cg-rose)" stroke="#C46B89" strokeWidth="2" />
        <rect x="18" y="16" width="28" height="28" rx="2" fill="white" />
        <rect x="22" y="20" width="20" height="14" rx="1.5" fill="url(#cg-sky)" />
        <path d="M32 27c-.8-1.4-3.2-1.4-3.4.3-.3 1.8 1.8 3 3.4 3.7 1.6-.7 3.7-1.9 3.4-3.7-.2-1.7-2.6-1.7-3.4-.3z" fill="#FF6B8E" />
        <line x1="22" y1="38" x2="34" y2="38" stroke="#C46B89" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="22" y1="41" x2="30" y2="41" stroke="#C46B89" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="32" cy="48" r="2" fill="#C46B89" />
      </>
    ),
    happy: (
      <>
        <ellipse cx="32" cy="58" rx="22" ry="3" fill="#3A2A2A" opacity="0.12" />
        <path d="M10 14c-.7-1.1-2.5-1.1-2.6.3-.2 1.4 1.4 2.4 2.6 2.9 1.2-.5 2.8-1.5 2.6-2.9-.1-1.4-1.9-1.4-2.6-.3z" fill="#FF6B8E" />
        <path d="M32 4c-.8-1.4-3.2-1.4-3.4.3-.3 1.8 1.8 3 3.4 3.7 1.6-.7 3.7-1.9 3.4-3.7-.2-1.7-2.6-1.7-3.4-.3z" fill="#FF6B8E" stroke="white" strokeWidth="1.4" />
        <path d="M54 12c-.7-1.1-2.5-1.1-2.6.3-.2 1.4 1.4 2.4 2.6 2.9 1.2-.5 2.8-1.5 2.6-2.9-.1-1.4-1.9-1.4-2.6-.3z" fill="#FF6B8E" />
        <text x="50" y="22" fontSize="7" fontWeight="900" fill="#FF6B8E">+1</text>
        <text x="6" y="28" fontSize="6" fontWeight="900" fill="#FF6B8E">+1</text>
        <rect x="14" y="16" width="36" height="40" rx="5" fill="url(#cg-rose)" stroke="#C46B89" strokeWidth="2" />
        <rect x="18" y="22" width="28" height="24" rx="2" fill="white" />
        <rect x="22" y="26" width="20" height="14" rx="1.5" fill="url(#cg-sky)" />
        <path d="M32 30c-2-3-6-3-6.5 .8-.7 4 4 6 6.5 7.5 2.5-1.5 7.2-3.5 6.5-7.5-.5-3.8-4.5-3.8-6.5-.8z" fill="#FF6B8E" stroke="white" strokeWidth="1.5" />
        <circle cx="32" cy="50" r="2" fill="#C46B89" />
      </>
    ),
  },
  hangout: {
    idle: (
      <>
        <ellipse cx="32" cy="58" rx="22" ry="3" fill="#3A2A2A" opacity="0.12" />
        <path d="M32 12c-1-1.6-3.6-1.6-3.8.4-.3 2 2 3.4 3.8 4.2 1.8-.8 4-2.2 3.8-4.2-.2-2-2.8-2-3.8-.4z" fill="#FF6B8E" stroke="#C44263" strokeWidth="1.3" />
        <circle cx="32" cy="28" r="10" fill="url(#cg-peach)" />
        <ellipse cx="29" cy="28" rx="1.4" ry="1.8" fill="#3A2A2A" />
        <ellipse cx="35" cy="28" rx="1.4" ry="1.8" fill="#3A2A2A" />
        <path d="M30 32c.7 1 2.3 1 3 0" stroke="#3A2A2A" strokeWidth="1.4" strokeLinecap="round" fill="none" />
        <circle cx="18" cy="46" r="9" fill="url(#cg-rose)" />
        <ellipse cx="15" cy="46" rx="1.3" ry="1.7" fill="#3A2A2A" />
        <ellipse cx="21" cy="46" rx="1.3" ry="1.7" fill="#3A2A2A" />
        <path d="M16 50c.7 1 2.3 1 3 0" stroke="#3A2A2A" strokeWidth="1.4" strokeLinecap="round" fill="none" />
        <circle cx="46" cy="46" r="9" fill="url(#cg-sky)" />
        <ellipse cx="43" cy="46" rx="1.3" ry="1.7" fill="#3A2A2A" />
        <ellipse cx="49" cy="46" rx="1.3" ry="1.7" fill="#3A2A2A" />
        <path d="M44 50c.7 1 2.3 1 3 0" stroke="#3A2A2A" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      </>
    ),
    happy: (
      <>
        <ellipse cx="32" cy="58" rx="22" ry="3" fill="#3A2A2A" opacity="0.12" />
        <path d="M32 8c-1.2-2-4.2-2-4.4.4-.3 2.4 2.4 4 4.4 5 2-1 4.7-2.6 4.4-5-.2-2.4-3.2-2.4-4.4-.4z" fill="#FF6B8E" stroke="white" strokeWidth="1.4" />
        <path d="M12 14c-.7-1.1-2.5-1.1-2.6.3-.2 1.4 1.4 2.4 2.6 2.9 1.2-.5 2.8-1.5 2.6-2.9-.1-1.4-1.9-1.4-2.6-.3z" fill="#FF6B8E" />
        <path d="M52 14c-.7-1.1-2.5-1.1-2.6.3-.2 1.4 1.4 2.4 2.6 2.9 1.2-.5 2.8-1.5 2.6-2.9-.1-1.4-1.9-1.4-2.6-.3z" fill="#FF6B8E" />
        <circle cx="56" cy="42" r="2.2" fill="#7AA8E6" />
        <line x1="58" y1="42" x2="58" y2="34" stroke="#7AA8E6" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="32" cy="26" r="10" fill="url(#cg-peach)" />
        <path d="M28 26c.6 -1.6 3 -1.6 3.6 0" stroke="#3A2A2A" strokeWidth="1.6" strokeLinecap="round" fill="none" />
        <path d="M33 26c.6 -1.6 3 -1.6 3.6 0" stroke="#3A2A2A" strokeWidth="1.6" strokeLinecap="round" fill="none" />
        <path d="M29 31c1 1.6 5 1.6 6 0" stroke="#3A2A2A" strokeWidth="1.4" strokeLinecap="round" fill="none" />
        <circle cx="18" cy="46" r="9" fill="url(#cg-rose)" />
        <path d="M14 46c.6 -1.5 2.8 -1.5 3.4 0" stroke="#3A2A2A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M19 46c.6 -1.5 2.8 -1.5 3.4 0" stroke="#3A2A2A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M15 50c1 1.5 5 1.5 6 0" stroke="#3A2A2A" strokeWidth="1.3" strokeLinecap="round" fill="none" />
        <circle cx="46" cy="46" r="9" fill="url(#cg-sky)" />
        <path d="M42 46c.6 -1.5 2.8 -1.5 3.4 0" stroke="#3A2A2A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M47 46c.6 -1.5 2.8 -1.5 3.4 0" stroke="#3A2A2A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M43 50c1 1.5 5 1.5 6 0" stroke="#3A2A2A" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      </>
    ),
  },
  'client-servicing': {
    idle: (
      <>
        <ellipse cx="32" cy="58" rx="22" ry="3" fill="#3A2A2A" opacity="0.12" />
        <circle cx="32" cy="30" r="18" fill="url(#cg-peach)" />
        <path d="M16 26c0-9 7-16 16-16s16 7 16 16c-4-3-10-4-16-4s-12 1-16 4z" fill="#3D2818" />
        <ellipse cx="26" cy="32" rx="1.8" ry="2.4" fill="#3A2A2A" />
        <ellipse cx="38" cy="32" rx="1.8" ry="2.4" fill="#3A2A2A" />
        <path d="M28 38c1.5 2 6.5 2 8 0" stroke="#3A2A2A" strokeWidth="1.7" strokeLinecap="round" fill="none" />
        <path d="M14 30c0-10 8-18 18-18s18 8 18 18" stroke="url(#cg-sky)" strokeWidth="5" fill="none" strokeLinecap="round" />
        <ellipse cx="14" cy="32" rx="4" ry="6" fill="url(#cg-sky)" />
        <ellipse cx="50" cy="32" rx="4" ry="6" fill="url(#cg-sky)" />
        <circle cx="49" cy="44" r="2.2" fill="url(#cg-rose)" />
      </>
    ),
    happy: (
      <>
        <ellipse cx="32" cy="58" rx="22" ry="3" fill="#3A2A2A" opacity="0.12" />
        <circle cx="32" cy="30" r="18" fill="url(#cg-peach)" />
        <path d="M16 26c0-9 7-16 16-16s16 7 16 16c-4-3-10-4-16-4s-12 1-16 4z" fill="#3D2818" />
        <path d="M22 32c1.5 -2 4.5 -2 6 0" stroke="#3A2A2A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M34 32c1.5 -2 4.5 -2 6 0" stroke="#3A2A2A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <ellipse cx="21" cy="36" rx="2.4" ry="1.6" fill="#FF6B8E" opacity="0.5" />
        <ellipse cx="43" cy="36" rx="2.4" ry="1.6" fill="#FF6B8E" opacity="0.5" />
        <path d="M25 38c2 4 10 4 12 0c-2 2-4 3-6 3s-4-1-6-3z" fill="#FF6B8E" stroke="#3A2A2A" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M14 30c0-10 8-18 18-18s18 8 18 18" stroke="url(#cg-sky)" strokeWidth="5" fill="none" strokeLinecap="round" />
        <ellipse cx="14" cy="32" rx="4" ry="6" fill="url(#cg-sky)" />
        <ellipse cx="50" cy="32" rx="4" ry="6" fill="url(#cg-sky)" />
        <ellipse cx="52" cy="14" rx="9" ry="6.5" fill="white" stroke="#FF6B8E" strokeWidth="1.6" />
        <path d="M48 17l-2 3 4-1z" fill="white" stroke="#FF6B8E" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M52 11c-.8-1.4-3.2-1.4-3.4.3-.3 1.8 1.8 3 3.4 3.7 1.6-.7 3.7-1.9 3.4-3.7-.2-1.7-2.6-1.7-3.4-.3z" fill="#FF6B8E" />
      </>
    ),
  },
  'social-appt': {
    idle: (
      <>
        <ellipse cx="32" cy="58" rx="22" ry="3" fill="#3A2A2A" opacity="0.12" />
        <path d="M26 8c-1 1 1 3 0 5" stroke="#A8A8A8" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.7" />
        <path d="M32 6c-1 1 1 3 0 5" stroke="#A8A8A8" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.7" />
        <path d="M38 8c-1 1 1 3 0 5" stroke="#A8A8A8" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.7" />
        <ellipse cx="32" cy="54" rx="22" ry="4" fill="#FFC68F" stroke="#7A4F2B" strokeWidth="1.6" />
        <ellipse cx="32" cy="53" rx="20" ry="3" fill="#FFD9B5" />
        <path d="M12 18h28v22c0 6-5 10-14 10s-14-4-14-10V18z" fill="white" stroke="#7A4F2B" strokeWidth="2" />
        <ellipse cx="26" cy="18" rx="14" ry="3" fill="#6F4E37" stroke="#3D2818" strokeWidth="1.4" />
        <path d="M40 26c5 0 7 3 7 6s-2 6-7 6" stroke="#7A4F2B" strokeWidth="2.4" fill="none" strokeLinecap="round" />
        <ellipse cx="22" cy="32" rx="1.5" ry="2" fill="#3A2A2A" />
        <ellipse cx="30" cy="32" rx="1.5" ry="2" fill="#3A2A2A" />
        <circle cx="22.5" cy="31" r="0.5" fill="white" />
        <circle cx="30.5" cy="31" r="0.5" fill="white" />
        <path d="M23 38c1.5 1.5 5 1.5 6 0" stroke="#3A2A2A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <circle cx="18" cy="36" r="2" fill="#FF9FB0" opacity="0.65" />
        <circle cx="34" cy="36" r="2" fill="#FF9FB0" opacity="0.65" />
      </>
    ),
    happy: (
      <>
        <ellipse cx="32" cy="58" rx="22" ry="3" fill="#3A2A2A" opacity="0.12" />
        <path d="M22 8c-2 2 2 5 0 8" stroke="#A8A8A8" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M30 4c-2 2 2 5 0 8" stroke="#A8A8A8" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M38 8c-2 2 2 5 0 8" stroke="#A8A8A8" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M50 14c-.8-1.4-3.2-1.4-3.4.3-.3 1.8 1.8 3 3.4 3.7 1.6-.7 3.7-1.9 3.4-3.7-.2-1.7-2.6-1.7-3.4-.3z" fill="#FF6B8E" />
        <path d="M12 20c-.7-1.1-2.5-1.1-2.6.3-.2 1.4 1.4 2.4 2.6 2.9 1.2-.5 2.8-1.5 2.6-2.9-.1-1.4-1.9-1.4-2.6-.3z" fill="#FF6B8E" />
        <ellipse cx="32" cy="54" rx="22" ry="4" fill="#FFC68F" stroke="#7A4F2B" strokeWidth="1.6" />
        <g transform="rotate(-8 26 36)">
          <path d="M12 18h28v22c0 6-5 10-14 10s-14-4-14-10V18z" fill="white" stroke="#7A4F2B" strokeWidth="2" />
          <ellipse cx="26" cy="18" rx="14" ry="3" fill="#6F4E37" stroke="#3D2818" strokeWidth="1.4" />
          <path d="M40 26c5 0 7 3 7 6s-2 6-7 6" stroke="#7A4F2B" strokeWidth="2.4" fill="none" strokeLinecap="round" />
          <path d="M19 32c.5 -1.5 3 -1.5 3.5 0" stroke="#3A2A2A" strokeWidth="1.6" strokeLinecap="round" fill="none" />
          <path d="M27 32c.5 -1.5 3 -1.5 3.5 0" stroke="#3A2A2A" strokeWidth="1.6" strokeLinecap="round" fill="none" />
          <path d="M20 38c1.5 2.5 8 2.5 9.5 0c-1.2 1.2-2.8 1.8-4.8 1.8s-3.5-.6-4.7-1.8z" fill="#FF6B8E" stroke="#3A2A2A" strokeWidth="1.3" strokeLinejoin="round" />
        </g>
      </>
    ),
  },
  opening: {
    idle: (
      <>
        <ellipse cx="32" cy="58" rx="22" ry="3" fill="#3A2A2A" opacity="0.12" />
        <path d="M32 12l2.4 5.4 5.8.8-4.3 3.8 1.1 5.7L32 25 26.9 27.7l1.1-5.7-4.3-3.8 5.8-.8z" fill="url(#cg-butter)" />
        <g transform="rotate(-10 32 30)"><rect x="12" y="26" width="40" height="9" rx="3" fill="url(#cg-sky)" /></g>
        <rect x="14" y="38" width="36" height="20" rx="6" fill="url(#cg-sky)" />
        <rect x="29" y="38" width="6" height="20" fill="url(#cg-rose)" />
        <rect x="14" y="46" width="36" height="4" fill="url(#cg-rose)" />
        <circle cx="32" cy="42" r="3" fill="url(#cg-rose)" />
        <ellipse cx="22" cy="50" rx="1.6" ry="2" fill="#1A2640" />
        <ellipse cx="42" cy="50" rx="1.6" ry="2" fill="#1A2640" />
      </>
    ),
    happy: (
      <>
        <ellipse cx="32" cy="58" rx="22" ry="3" fill="#3A2A2A" opacity="0.12" />
        <g stroke="#FFB300" strokeWidth="2" strokeLinecap="round">
          <line x1="32" y1="2" x2="32" y2="6" />
          <line x1="18" y1="8" x2="21" y2="11" />
          <line x1="46" y1="8" x2="43" y2="11" />
        </g>
        <path d="M32 4l3 7 7.5 1-5.5 5 1.5 7.5L32 21l-6.5 3.5L27 17l-5.5-5 7.5-1z" fill="url(#cg-butter)" stroke="#A68A3A" strokeWidth="1.6" />
        <g transform="rotate(-22 32 28)"><rect x="10" y="22" width="44" height="9" rx="3" fill="url(#cg-sky)" /></g>
        <rect x="14" y="38" width="36" height="20" rx="6" fill="url(#cg-sky)" />
        <rect x="29" y="38" width="6" height="20" fill="url(#cg-rose)" />
        <rect x="14" y="46" width="36" height="4" fill="url(#cg-rose)" />
        <circle cx="32" cy="42" r="3" fill="url(#cg-rose)" />
        <path d="M19 51c1 -1.5 3 -1.5 4 0" stroke="#1A2640" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M41 51c1 -1.5 3 -1.5 4 0" stroke="#1A2640" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M27 54c1.5 2 8.5 2 10 0" stroke="#1A2640" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      </>
    ),
  },
  closing: {
    idle: (
      <>
        <ellipse cx="32" cy="58" rx="22" ry="3" fill="#3A2A2A" opacity="0.12" />
        <path d="M14 18c-4 0-6 3-6 6s3 7 8 7" stroke="#A68A3A" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M50 18c4 0 6 3 6 6s-3 7-8 7" stroke="#A68A3A" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M16 14h32v14c0 9-6 14-16 14s-16-5-16-14V14z" fill="url(#cg-butter)" />
        <path d="M32 18l2 5 5 .7-3.7 3.3 1 5L32 29.5l-4.3 2.5 1-5L25 23.7l5-.7z" fill="white" opacity="0.75" />
        <ellipse cx="25" cy="34" rx="1.6" ry="2.2" fill="#3A2A2A" />
        <ellipse cx="39" cy="34" rx="1.6" ry="2.2" fill="#3A2A2A" />
        <path d="M28 39c1.5 2 6.5 2 8 0" stroke="#3A2A2A" strokeWidth="1.7" strokeLinecap="round" fill="none" />
        <rect x="20" y="48" width="24" height="6" rx="2.5" fill="url(#cg-butter)" />
        <rect x="18" y="53" width="28" height="4" rx="2" fill="#A68A3A" />
      </>
    ),
    happy: (
      <>
        <ellipse cx="32" cy="58" rx="22" ry="3" fill="#3A2A2A" opacity="0.12" />
        <g stroke="#FFD64D" strokeWidth="2.5" strokeLinecap="round" opacity="0.8">
          <line x1="32" y1="4" x2="32" y2="9" />
          <line x1="10" y1="8" x2="14" y2="12" />
          <line x1="54" y1="8" x2="50" y2="12" />
          <line x1="4" y1="22" x2="9" y2="22" />
          <line x1="60" y1="22" x2="55" y2="22" />
        </g>
        <path d="M14 18c-4 0-6 3-6 6s3 7 8 7" stroke="#A68A3A" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M50 18c4 0 6 3 6 6s-3 7-8 7" stroke="#A68A3A" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M16 14h32v14c0 9-6 14-16 14s-16-5-16-14V14z" fill="url(#cg-butter)" />
        <path d="M32 16l2.4 5.4 5.6.7-4 3.6 1.2 5.6L32 28.5l-5.2 2.8L28 25.7l-4-3.6 5.6-.7z" fill="white" opacity="0.85" />
        <path d="M22 32l1.8 2 1.8-2-1.8-2z" fill="#3A2A2A" />
        <path d="M38 32l1.8 2 1.8-2-1.8-2z" fill="#3A2A2A" />
        <path d="M25 36c2 5 12 5 14 0c-2 3-5 4-7 4s-5-1-7-4z" fill="#FF6B8E" stroke="#3A2A2A" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="20" y="48" width="24" height="6" rx="2.5" fill="url(#cg-butter)" />
        <rect x="18" y="53" width="28" height="4" rx="2" fill="#A68A3A" />
      </>
    ),
  },
  closed: {
    idle: (
      <>
        <ellipse cx="32" cy="58" rx="22" ry="3" fill="#3A2A2A" opacity="0.12" />
        <ellipse cx="32" cy="48" rx="20" ry="6" fill="url(#cg-butter)" />
        <ellipse cx="32" cy="38" rx="18" ry="5.5" fill="url(#cg-butter)" />
        <ellipse cx="32" cy="28" rx="16" ry="5" fill="url(#cg-butter)" />
        <text x="32" y="32" fontSize="10" fontWeight="900" textAnchor="middle" fill="#A68A3A" opacity="0.7">$</text>
        <ellipse cx="27" cy="48" rx="1.4" ry="1.8" fill="#3A2A2A" />
        <ellipse cx="37" cy="48" rx="1.4" ry="1.8" fill="#3A2A2A" />
        <path d="M29 51c1 1 3 1 4 0" stroke="#3A2A2A" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      </>
    ),
    happy: (
      <>
        <ellipse cx="32" cy="58" rx="22" ry="3" fill="#3A2A2A" opacity="0.12" />
        <path d="M10 14l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" fill="#FFD64D" />
        <path d="M54 12l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" fill="#FFD64D" />
        <circle cx="14" cy="22" r="5" fill="url(#cg-gold)" stroke="#A68A3A" strokeWidth="1.4" />
        <text x="14" y="25" fontSize="6" fontWeight="900" textAnchor="middle" fill="#A68A3A">$</text>
        <circle cx="50" cy="20" r="4" fill="url(#cg-gold)" stroke="#A68A3A" strokeWidth="1.4" />
        <text x="50" y="23" fontSize="5" fontWeight="900" textAnchor="middle" fill="#A68A3A">$</text>
        <ellipse cx="32" cy="48" rx="22" ry="6" fill="url(#cg-butter)" />
        <ellipse cx="32" cy="38" rx="20" ry="5.5" fill="url(#cg-butter)" />
        <ellipse cx="32" cy="28" rx="18" ry="5" fill="url(#cg-butter)" />
        <text x="32" y="32" fontSize="11" fontWeight="900" textAnchor="middle" fill="#7A5A2E">$$$</text>
        <text x="26" y="51" fontSize="6" fontWeight="900" textAnchor="middle" fill="#3A2A2A">$</text>
        <text x="38" y="51" fontSize="6" fontWeight="900" textAnchor="middle" fill="#3A2A2A">$</text>
        <path d="M27 52c1.5 2 8 2 10 0" stroke="#3A2A2A" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      </>
    ),
  },
};

// Alias map: handle alternate activity_id spellings from the database.
// Add your own here if your DB uses different IDs.
const ALIAS_MAP: Record<string, string> = {
  prospecting: 'call',
  calls: 'call',
  'social-prospecting': 'social-appt',
  'social-media-posting': 'social-media-post',
};

export function hasActivityIllustration(activityId: string): boolean {
  const key = normalizeId(activityId);
  return key in ILLUSTRATIONS || key in ALIAS_MAP;
}

export function ActivityIllustration({ activityId, isCelebrating, className }: ActivityIllustrationProps) {
  const normalized = normalizeId(activityId);
  const key = ALIAS_MAP[normalized] ?? normalized;
  const set = ILLUSTRATIONS[key];
  if (!set) return null;

  return (
    <div
      className={cn(
        'relative rounded-full bg-white flex items-center justify-center',
        'shadow-[0_8px_18px_rgba(80,40,150,0.15)] border-2 border-white/90',
        'transition-transform duration-300 ease-out',
        className
      )}
      style={isCelebrating ? { animation: 'activity-pop 0.7s cubic-bezier(.34,1.56,.64,1)' } : undefined}
    >
      <svg viewBox="0 0 64 64" className="w-[64%] h-[64%]">
        <GradientDefs />
        {/* Pure opacity cross-fade — no scale, so expressions stay crisp */}
        <g style={{ opacity: isCelebrating ? 0 : 1, transition: 'opacity 0.22s ease' }}>
          {set.idle}
        </g>
        <g style={{ opacity: isCelebrating ? 1 : 0, transition: 'opacity 0.22s ease' }}>
          {set.happy}
        </g>
      </svg>
    </div>
  );
}
