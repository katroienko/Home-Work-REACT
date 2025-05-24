const XIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={76}
    height={76}
    viewBox="0 0 76 76"
    {...props}
  >
    <rect width="76" height="76" fill="black" />
    <path
      d="M20 20 L56 56 M56 20 L20 56" // Пример креста "X"
      stroke="white"
      strokeWidth="6"
      strokeLinecap="round"
    />
  </svg>
);

export default XIcon;
