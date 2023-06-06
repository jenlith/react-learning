/**
 * NavElement component to go within the Nav component
 * @param {*} param0 label for component, isCurr for if it's the current view, link/onClick to determine behaviour as either link or button when component is clicked, children
 * @returns NavElement component
 */
const NavElement = ({ label, isCurr, link, onClick, children }) => {
  let name = label;
  if (isCurr) {
    name = <strong>{label}</strong>;
  }
  let nav_piece = <></>;
  if (onClick) {
    nav_piece = <button onClick={() => onClick()}>{name}</button>;
  } else {
    nav_piece = (
      <a href={link} target="_blank">
        {name}
      </a>
    );
  }
  return (
    <li>
      {nav_piece}
      {children && <ul>{children}</ul>}
    </li>
  );
};

export default NavElement;
