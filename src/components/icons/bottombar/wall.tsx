export default function Wall({ className = "", ...props }) {
  return (
    <svg
      fill="#000000"
      viewBox="0 0 100 100"
      version="1.1"
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#000000"
      strokeWidth="2"
      className={className}
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#CCCCCC"
        strokeWidth="1"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g id="jackhammer"></g> <g id="drilling_machine"></g>
        <g id="hammer"></g> <g id="measuring_tape"></g> <g id="wrench"></g>
        <g id="saw"></g> <g id="building"></g>
        <g id="wall">
          <path d="M95,43H81c-0.6,0-1,0.4-1,1v11H64H51V44c0-0.6-0.4-1-1-1H37V33h13c0.6,0,1-0.4,1-1V20c0-0.6-0.4-1-1-1H19H5 c-0.6,0-1,0.4-1,1v12v12v12v12v12c0,0.6,0.4,1,1,1h14h31h31h14c0.6,0,1-0.4,1-1V68V56V44C96,43.4,95.6,43,95,43z M81,67H65V57h16 h13v10H81z M50,67H37V57h13h13v10H50z M19,67H6V57h13h16v10H19z M18,55H6V45h12V55z M82,45h12v10H82V45z M49,55H36H20V45h16h13V55z M35,43H19H6V33h13h16V43z M49,31H36H20V21h29V31z M6,21h12v10H6V21z M6,69h12v10H6V69z M20,69h16h13v10H20V69z M51,69h13h16v10H51 V69z M94,79H82V69h12V79z"></path>
        </g>
        <g id="crane"></g> <g id="barrier_sign"></g> <g id="concept"></g>
        <g id="shovel"></g> <g id="architecture"></g> <g id="safety_helmet"></g>
        <g id="worker"></g> <g id="teamwork"></g> <g id="roller_brush"></g>
        <g id="designs"></g> <g id="trolley"></g> <g id="pick_axe"></g>
      </g>
    </svg>
  );
}
