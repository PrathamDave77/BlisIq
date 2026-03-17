export function Cross() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M13 1L1 13M1 1L13 13"
        stroke="#A4A7AE"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}



export const ImportIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M6.66699 13.3333L10.0003 10M10.0003 10L13.3337 13.3333M10.0003 10V17.5M16.667 13.9524C17.6849 13.1117 18.3337 11.8399 18.3337 10.4167C18.3337 7.88536 16.2816 5.83333 13.7503 5.83333C13.5682 5.83333 13.3979 5.73833 13.3054 5.58145C12.2187 3.73736 10.2124 2.5 7.91699 2.5C4.46521 2.5 1.66699 5.29822 1.66699 8.75C1.66699 10.4718 2.3632 12.0309 3.48945 13.1613"
      stroke="#A4A7AE"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Edit_line = ({ size }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 13.3333H14M11 2.33334C11.2652 2.06813 11.6249 1.91913 12 1.91913C12.1857 1.91913 12.3696 1.95571 12.5412 2.02678C12.7128 2.09785 12.8687 2.20202 13 2.33334C13.1313 2.46466 13.2355 2.62057 13.3066 2.79215C13.3776 2.96373 13.4142 3.14762 13.4142 3.33334C13.4142 3.51906 13.3776 3.70296 13.3066 3.87454C13.2355 4.04612 13.1313 4.20202 13 4.33334L4.66667 12.6667L2 13.3333L2.66667 10.6667L11 2.33334Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}

export const Ellipse = ({ size, text }) => {
  return (
    <div className="flex text-md">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="20" fill="#F5F5F5" />
        <circle cx="20" cy="20" r="19.5" stroke="black" strokeOpacity="0.08" />
        <text
          x="20"
          y="20"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="14"
          fontWeight="600"
          fill="currentColor"
        >
          {text}
        </text>
      </svg>
    </div>
  );
}

export const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
  >
    <path
      d="M6.66829 0.834961V12.5016M0.834961 6.66829H12.5016"
      stroke="#84CAFF"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Chevron_right = ({ size }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M6 12L10 8L6 4" stroke="#A4A7AE" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
}

export const DownChevron = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="7"
      viewBox="0 0 12 7"
      fill="none"
    >
      <path
        d="M0.834961 0.834961L5.83496 5.83496L10.835 0.834961"
        stroke="#A4A7AE"
        stroke-width="1.67"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>)
};

export const Eye = ({ size }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M1.61342 8.47543C1.52262 8.33167 1.47723 8.25979 1.45182 8.14892C1.43273 8.06565 1.43273 7.93431 1.45182 7.85104C1.47723 7.74017 1.52262 7.66829 1.61341 7.52453C2.36369 6.33654 4.59693 3.33331 8.00027 3.33331C11.4036 3.33331 13.6369 6.33654 14.3871 7.52453C14.4779 7.66829 14.5233 7.74017 14.5487 7.85104C14.5678 7.93431 14.5678 8.06565 14.5487 8.14892C14.5233 8.25979 14.4779 8.33167 14.3871 8.47543C13.6369 9.66342 11.4036 12.6666 8.00027 12.6666C4.59693 12.6666 2.36369 9.66342 1.61342 8.47543Z" stroke="#A4A7AE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M8.00027 9.99998C9.10484 9.99998 10.0003 9.10455 10.0003 7.99998C10.0003 6.89541 9.10484 5.99998 8.00027 5.99998C6.8957 5.99998 6.00027 6.89541 6.00027 7.99998C6.00027 9.10455 6.8957 9.99998 8.00027 9.99998Z" stroke="#A4A7AE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
}


export const Edit = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <g clip-path="url(#clip0_35001_150976)">
        <path d="M1.91735 12.0771C1.94798 11.8014 1.96329 11.6636 2.005 11.5347C2.042 11.4205 2.09428 11.3117 2.16041 11.2114C2.23496 11.0983 2.33302 11.0003 2.52914 10.8042L11.3333 1.99998C12.0697 1.2636 13.2636 1.2636 14 1.99998C14.7364 2.73636 14.7364 3.93027 14 4.66665L5.19581 13.4708C4.99969 13.6669 4.90163 13.765 4.78858 13.8396C4.68829 13.9057 4.57952 13.958 4.46522 13.995C4.33639 14.0367 4.19856 14.052 3.9229 14.0826L1.66666 14.3333L1.91735 12.0771Z" stroke="#A4A7AE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_35001_150976">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const Trash = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M10.6667 3.99998V3.46665C10.6667 2.71991 10.6667 2.34654 10.5213 2.06133C10.3935 1.81044 10.1895 1.60647 9.93865 1.47864C9.65344 1.33331 9.28007 1.33331 8.53333 1.33331H7.46667C6.71993 1.33331 6.34656 1.33331 6.06135 1.47864C5.81046 1.60647 5.60649 1.81044 5.47866 2.06133C5.33333 2.34654 5.33333 2.71991 5.33333 3.46665V3.99998M6.66667 7.66665V11M9.33333 7.66665V11M2 3.99998H14M12.6667 3.99998V11.4666C12.6667 12.5868 12.6667 13.1468 12.4487 13.5746C12.2569 13.951 11.951 14.2569 11.5746 14.4487C11.1468 14.6666 10.5868 14.6666 9.46667 14.6666H6.53333C5.41323 14.6666 4.85318 14.6666 4.42535 14.4487C4.04903 14.2569 3.74307 13.951 3.55132 13.5746C3.33333 13.1468 3.33333 12.5868 3.33333 11.4666V3.99998" stroke="#A4A7AE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}