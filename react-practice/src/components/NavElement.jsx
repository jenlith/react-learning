const NavElement = ({ label, link, isCurr, onClick, children }) => {
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
