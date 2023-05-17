const blobColors = {
  red: "#F97D6A",
  blue: "#52CFDE",
  yellow: "#FAB836",
};

export const blurBlobs = (color: "red" | "blue" | "yellow") => (
  <svg
    width="258"
    height="258"
    viewBox="0 0 258 258"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_f_22_4496)">
      <circle
        cx="129"
        cy="129"
        r="39"
        fill={blobColors[color]}
        fillOpacity="0.7"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_22_4496"
        x="0"
        y="0"
        width="258"
        height="258"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="45"
          result="effect1_foregroundBlur_22_4496"
        />
      </filter>
    </defs>
  </svg>
);
