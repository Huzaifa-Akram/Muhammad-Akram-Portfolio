"use client";

import s from "./CoolingTower.module.css";

export default function CoolingTower() {
  return (
    <div className={s.wrapper}>
      <svg
        viewBox="0 0 500 400"
        xmlns="http://www.w3.org/2000/svg"
        className={s.svg}
      >
        <defs>
          {/* Gradient for sky */}
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          {/* Ground gradient */}
          <linearGradient id="groundGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#152035" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          {/* Tower body gradient */}
          <linearGradient id="towerGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4b6a8f" />
            <stop offset="40%" stopColor="#394f6e" />
            <stop offset="100%" stopColor="#2c3e57" />
          </linearGradient>
          {/* Chimney gradient */}
          <linearGradient id="chimneyGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3d5573" />
            <stop offset="50%" stopColor="#506b8a" />
            <stop offset="100%" stopColor="#3d5573" />
          </linearGradient>
          {/* Smoke filter for glow */}
          <filter id="smokeBlur">
            <feGaussianBlur stdDeviation="6" />
          </filter>
          <filter id="smokeSoftBlur">
            <feGaussianBlur stdDeviation="4" />
          </filter>
          {/* Building gradient */}
          <linearGradient id="buildingGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#374b66" />
            <stop offset="100%" stopColor="#283a52" />
          </linearGradient>
        </defs>

        {/* Sky background */}
        <rect width="500" height="400" fill="url(#skyGrad)" />

        {/* Stars */}
        <circle cx="50" cy="30" r="1" fill="#ffffff" opacity="0.4" />
        <circle cx="120" cy="55" r="0.8" fill="#ffffff" opacity="0.3" />
        <circle cx="200" cy="20" r="1.2" fill="#ffffff" opacity="0.5" />
        <circle cx="310" cy="45" r="0.7" fill="#ffffff" opacity="0.3" />
        <circle cx="400" cy="25" r="1" fill="#ffffff" opacity="0.4" />
        <circle cx="450" cy="60" r="0.9" fill="#ffffff" opacity="0.35" />
        <circle cx="80" cy="80" r="0.6" fill="#ffffff" opacity="0.25" />
        <circle cx="370" cy="70" r="0.8" fill="#ffffff" opacity="0.3" />

        {/* Ground */}
        <rect x="0" y="330" width="500" height="70" fill="url(#groundGrad)" />
        <line
          x1="0"
          y1="330"
          x2="500"
          y2="330"
          stroke="#2a3f5c"
          strokeWidth="1"
        />

        {/* ===== COOLING TOWER (main, center) ===== */}
        {/* Hyperboloid shape */}
        <path
          d="M200,330 Q195,280 210,200 Q220,160 225,120 L275,120 Q280,160 290,200 Q305,280 300,330 Z"
          fill="url(#towerGrad)"
          stroke="#506b8a"
          strokeWidth="1"
        />
        {/* Tower top rim */}
        <ellipse
          cx="250"
          cy="120"
          rx="28"
          ry="6"
          fill="#5a7a9e"
          stroke="#6a8aae"
          strokeWidth="0.5"
        />
        {/* Tower base detail */}
        <line
          x1="210"
          y1="310"
          x2="290"
          y2="310"
          stroke="#506b8a"
          strokeWidth="0.5"
          opacity="0.5"
        />
        {/* Horizontal bands */}
        <line
          x1="215"
          y1="200"
          x2="285"
          y2="200"
          stroke="#506b8a"
          strokeWidth="0.5"
          opacity="0.4"
        />
        <line
          x1="208"
          y1="250"
          x2="292"
          y2="250"
          stroke="#506b8a"
          strokeWidth="0.5"
          opacity="0.3"
        />

        {/* ===== SMOKE from cooling tower ===== */}
        <g filter="url(#smokeBlur)" opacity="0.45">
          <circle
            cx="240"
            cy="100"
            r="14"
            fill="#94a3b8"
            className={s.smoke1}
          />
          <circle cx="255" cy="90" r="18" fill="#8a98ab" className={s.smoke2} />
          <circle cx="260" cy="75" r="16" fill="#7d8c9e" className={s.smoke3} />
          <circle cx="245" cy="60" r="20" fill="#708090" className={s.smoke4} />
          <circle cx="265" cy="45" r="14" fill="#647585" className={s.smoke5} />
          <circle cx="250" cy="30" r="22" fill="#5a6a7a" className={s.smoke6} />
        </g>
        <g filter="url(#smokeSoftBlur)" opacity="0.3">
          <circle cx="248" cy="95" r="10" fill="#b0bec5" className={s.smoke7} />
          <circle cx="258" cy="80" r="12" fill="#a0aebb" className={s.smoke8} />
          <circle cx="242" cy="50" r="16" fill="#8899aa" className={s.smoke9} />
        </g>

        {/* ===== TALL CHIMNEY (left) ===== */}
        <rect
          x="90"
          y="140"
          width="22"
          height="190"
          fill="url(#chimneyGrad)"
          rx="2"
        />
        {/* Chimney top */}
        <rect x="86" y="136" width="30" height="8" fill="#5a7a9e" rx="1" />
        {/* Red warning stripes */}
        <rect
          x="90"
          y="170"
          width="22"
          height="4"
          fill="#c0392b"
          opacity="0.7"
        />
        <rect
          x="90"
          y="230"
          width="22"
          height="4"
          fill="#c0392b"
          opacity="0.7"
        />
        {/* Chimney light */}
        <circle
          cx="101"
          cy="142"
          r="2"
          fill="#e74c3c"
          opacity="0.8"
          className={s.blink}
        />

        {/* Chimney smoke */}
        <g filter="url(#smokeBlur)" opacity="0.4">
          <circle
            cx="98"
            cy="120"
            r="10"
            fill="#94a3b8"
            className={s.cSmoke1}
          />
          <circle
            cx="105"
            cy="105"
            r="13"
            fill="#8a98ab"
            className={s.cSmoke2}
          />
          <circle
            cx="100"
            cy="85"
            r="11"
            fill="#7d8c9e"
            className={s.cSmoke3}
          />
          <circle
            cx="108"
            cy="65"
            r="15"
            fill="#708090"
            className={s.cSmoke4}
          />
        </g>

        {/* ===== SECOND CHIMNEY (right) ===== */}
        <rect
          x="370"
          y="170"
          width="18"
          height="160"
          fill="url(#chimneyGrad)"
          rx="2"
        />
        <rect x="366" y="166" width="26" height="7" fill="#5a7a9e" rx="1" />
        <circle
          cx="379"
          cy="172"
          r="1.5"
          fill="#e74c3c"
          opacity="0.7"
          className={s.blink2}
        />

        {/* Right chimney smoke */}
        <g filter="url(#smokeSoftBlur)" opacity="0.35">
          <circle
            cx="377"
            cy="150"
            r="9"
            fill="#94a3b8"
            className={s.rSmoke1}
          />
          <circle
            cx="382"
            cy="135"
            r="11"
            fill="#8a98ab"
            className={s.rSmoke2}
          />
          <circle
            cx="378"
            cy="115"
            r="13"
            fill="#7d8c9e"
            className={s.rSmoke3}
          />
        </g>

        {/* ===== BUILDINGS ===== */}
        {/* Left building cluster */}
        <rect
          x="30"
          y="270"
          width="55"
          height="60"
          fill="url(#buildingGrad)"
          rx="2"
        />
        <rect
          x="35"
          y="280"
          width="8"
          height="10"
          fill="#4a6585"
          rx="1"
          opacity="0.5"
        />
        <rect
          x="48"
          y="280"
          width="8"
          height="10"
          fill="#4a6585"
          rx="1"
          opacity="0.5"
        />
        <rect
          x="61"
          y="280"
          width="8"
          height="10"
          fill="#4a6585"
          rx="1"
          opacity="0.5"
        />
        <rect
          x="35"
          y="300"
          width="8"
          height="10"
          fill="#fbbf24"
          rx="1"
          opacity="0.3"
        />
        <rect
          x="48"
          y="300"
          width="8"
          height="10"
          fill="#4a6585"
          rx="1"
          opacity="0.5"
        />
        <rect
          x="61"
          y="300"
          width="8"
          height="10"
          fill="#fbbf24"
          rx="1"
          opacity="0.2"
        />

        {/* Right building */}
        <rect
          x="395"
          y="250"
          width="65"
          height="80"
          fill="url(#buildingGrad)"
          rx="2"
        />
        <rect
          x="400"
          y="260"
          width="8"
          height="10"
          fill="#4a6585"
          rx="1"
          opacity="0.5"
        />
        <rect
          x="413"
          y="260"
          width="8"
          height="10"
          fill="#fbbf24"
          rx="1"
          opacity="0.25"
        />
        <rect
          x="426"
          y="260"
          width="8"
          height="10"
          fill="#4a6585"
          rx="1"
          opacity="0.5"
        />
        <rect
          x="439"
          y="260"
          width="8"
          height="10"
          fill="#4a6585"
          rx="1"
          opacity="0.5"
        />
        <rect
          x="400"
          y="280"
          width="8"
          height="10"
          fill="#4a6585"
          rx="1"
          opacity="0.5"
        />
        <rect
          x="413"
          y="280"
          width="8"
          height="10"
          fill="#4a6585"
          rx="1"
          opacity="0.5"
        />
        <rect
          x="426"
          y="280"
          width="8"
          height="10"
          fill="#fbbf24"
          rx="1"
          opacity="0.3"
        />
        <rect
          x="439"
          y="280"
          width="8"
          height="10"
          fill="#4a6585"
          rx="1"
          opacity="0.5"
        />
        <rect
          x="400"
          y="300"
          width="8"
          height="10"
          fill="#4a6585"
          rx="1"
          opacity="0.5"
        />
        <rect
          x="413"
          y="300"
          width="8"
          height="10"
          fill="#4a6585"
          rx="1"
          opacity="0.5"
        />
        <rect
          x="426"
          y="300"
          width="8"
          height="10"
          fill="#4a6585"
          rx="1"
          opacity="0.5"
        />
        <rect
          x="439"
          y="300"
          width="8"
          height="10"
          fill="#fbbf24"
          rx="1"
          opacity="0.2"
        />

        {/* Small tank (right of tower) */}
        <ellipse cx="340" cy="310" rx="18" ry="8" fill="#3d5573" />
        <rect x="322" y="310" width="36" height="20" fill="#3d5573" />
        <ellipse cx="340" cy="330" rx="18" ry="5" fill="#344b65" />

        {/* Pipes */}
        <line
          x1="112"
          y1="310"
          x2="200"
          y2="310"
          stroke="#4a6585"
          strokeWidth="3"
        />
        <line
          x1="300"
          y1="310"
          x2="322"
          y2="310"
          stroke="#4a6585"
          strokeWidth="3"
        />
        <line
          x1="358"
          y1="310"
          x2="370"
          y2="310"
          stroke="#4a6585"
          strokeWidth="2"
        />

        {/* Pipe valves */}
        <circle
          cx="155"
          cy="310"
          r="4"
          fill="#506b8a"
          stroke="#6a8aae"
          strokeWidth="1"
        />
        <circle
          cx="310"
          cy="310"
          r="3"
          fill="#506b8a"
          stroke="#6a8aae"
          strokeWidth="1"
        />

        {/* Steam wisps from pipes */}
        <g opacity="0.15" filter="url(#smokeSoftBlur)">
          <circle
            cx="155"
            cy="302"
            r="5"
            fill="#b0bec5"
            className={s.pipeSteam1}
          />
          <circle
            cx="310"
            cy="304"
            r="4"
            fill="#b0bec5"
            className={s.pipeSteam2}
          />
        </g>
      </svg>
    </div>
  );
}
