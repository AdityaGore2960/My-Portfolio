/**
 * HeroGraphic — Editorial collage graphic
 * Layers (bottom → top):
 *  z-0   Giant "V" letterform — bold, clearly flanks the portrait
 *  z-10  Pink petal flower burst (top-left, fully inside frame)
 *  z-20  Grayscale portrait (center-right)
 *  z-30  Decorative accents: peach hexagon, circle outline, green blob, dots
 */

export default function HeroGraphic() {
  return (
    <div
      className="relative w-full h-full min-h-[520px] overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* ─── Giant filled "V" — subtle depth layer ─────────── */}
      <span
        className="absolute font-serif font-black pointer-events-none"
        style={{
          fontSize: "clamp(260px, 36vw, 480px)",
          lineHeight: 0.85,
          zIndex: 1,
          top: "48%",
          left: "44%",
          transform: "translate(-44%, -45%)",
          opacity: 0.07,
          letterSpacing: "-0.05em",
          userSelect: "none",
          color: "#000",
        }}
      >
        V
      </span>

      {/* ─── Bold outlined "V" — the editorial centrepiece ──── */}
      <span
        className="absolute font-serif font-black pointer-events-none"
        style={{
          fontSize: "clamp(260px, 36vw, 480px)",
          lineHeight: 0.85,
          zIndex: 2,
          top: "48%",
          left: "44%",
          transform: "translate(-44%, -45%)",
          opacity: 1,
          letterSpacing: "-0.05em",
          userSelect: "none",
          WebkitTextStroke: "2.5px #222",
          color: "transparent",
        }}
      >
        V
      </span>

      {/* ─── Pink petal flower burst (top-left, inset) ──────── */}
      <svg
        viewBox="0 0 300 300"
        className="animate-float"
        style={{
          position: "absolute",
          zIndex: 10,
          width: "clamp(160px, 18vw, 260px)",
          top: "-5%",
          left: "-2%",
          opacity: 0.95,
          animationDelay: "0.5s",
        }}
      >
        <defs>
          <radialGradient id="petalGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff85a1" />
            <stop offset="55%" stopColor="#EE2A5C" />
            <stop offset="100%" stopColor="#b81845" />
          </radialGradient>
        </defs>
        {/* 8 petals */}
        {Array.from({ length: 8 }).map((_, i) => (
          <ellipse
            key={i}
            cx="150"
            cy="88"
            rx="26"
            ry="68"
            fill="url(#petalGrad)"
            transform={`rotate(${i * 45} 150 150)`}
            opacity="0.9"
          />
        ))}
        <circle cx="150" cy="150" r="28" fill="#EE2A5C" />
        <circle cx="150" cy="150" r="16" fill="#fff" opacity="0.25" />
        {/* Rotating text arc */}
        <path
          id="flowerTextPath"
          d="M 150,150 m -105,0 a 105,105 0 1,1 210,0 a 105,105 0 1,1 -210,0"
          fill="none"
        />
        <text
          fontSize="9"
          fill="white"
          fontFamily="sans-serif"
          fontWeight="700"
          letterSpacing="2.2"
        >
          <textPath href="#flowerTextPath" startOffset="0%">
            GO AT THE DISCO AND DESTROY THE FLOOR ✦ GO AT THE DISCO ✦
          </textPath>
        </text>
      </svg>



      {/* ─── Peach hexagon with dot grid (bottom-right) ──────── */}
      <svg
        viewBox="0 0 180 200"
        className="animate-float"
        style={{
          position: "absolute",
          zIndex: 30,
          width: "clamp(80px, 8.5vw, 120px)",
          bottom: "6%",
          right: "4%",
          animationDelay: "1s",
          animationDuration: "5s",
        }}
      >
        <polygon
          points="90,10 170,55 170,145 90,190 10,145 10,55"
          fill="#F4C2A1"
          opacity="0.9"
        />
        {[
          [60, 80], [90, 80], [120, 80],
          [75, 110], [105, 110],
          [60, 140], [90, 140], [120, 140],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="5" fill="#3D3D3D" opacity="0.45" />
        ))}
      </svg>

      {/* ─── Thin circle outline (top-right area) ────────────── */}
      <svg
        viewBox="0 0 120 120"
        className="animate-spin-slow"
        style={{
          position: "absolute",
          zIndex: 30,
          width: "clamp(65px, 7vw, 100px)",
          top: "10%",
          right: "8%",
          transformOrigin: "center",
        }}
      >
        <circle cx="60" cy="60" r="55" stroke="#3D3D3D" strokeWidth="1.5" fill="none" />
      </svg>

      {/* ─── Small solid black circle (lower-left) ───────────── */}
      <div
        style={{
          position: "absolute",
          zIndex: 30,
          width: "clamp(18px, 2vw, 28px)",
          height: "clamp(18px, 2vw, 28px)",
          bottom: "22%",
          left: "8%",
          borderRadius: "50%",
          backgroundColor: "#000",
        }}
      />

      {/* ─── Accent pink dot cluster (mid-right) ─────────────── */}
      <div
        style={{
          position: "absolute",
          zIndex: 30,
          top: "30%",
          right: "7%",
          display: "flex",
          gap: "6px",
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              backgroundColor: i === 1 ? "#EE2A5C" : "#3D3D3D",
              opacity: 0.7,
            }}
          />
        ))}
      </div>

      {/* ─── Accent pink small circle ────────────────────────── */}
      <div
        style={{
          position: "absolute",
          zIndex: 30,
          width: "clamp(10px, 1.1vw, 16px)",
          height: "clamp(10px, 1.1vw, 16px)",
          top: "60%",
          right: "5%",
          borderRadius: "50%",
          backgroundColor: "#EE2A5C",
        }}
      />

      {/* ─── Soft pastel green blob (left-center) ────────────── */}
      <svg
        viewBox="0 0 80 60"
        style={{
          position: "absolute",
          zIndex: 30,
          width: "clamp(40px, 5vw, 68px)",
          bottom: "30%",
          left: "5%",
          opacity: 0.55,
        }}
      >
        <ellipse cx="40" cy="30" rx="38" ry="26" fill="#b7e4c7" />
      </svg>

      {/* ─── Thin diagonal line accent ───────────────────────── */}
      <svg
        viewBox="0 0 60 60"
        style={{
          position: "absolute",
          zIndex: 30,
          width: "clamp(40px, 5vw, 70px)",
          bottom: "14%",
          left: "20%",
          opacity: 0.35,
        }}
      >
        <line x1="5" y1="55" x2="55" y2="5" stroke="#3D3D3D" strokeWidth="1.5" />
        <line x1="15" y1="55" x2="55" y2="15" stroke="#EE2A5C" strokeWidth="1" />
      </svg>
    </div>
  );
}
