import Button from "./Button";

const Nav = ({ title, isVertical, closeHandler, children }) => {
  const displayDirection = isVertical === true ? "vertical" : "horizontal";
  return (
    <div className={"menu " + displayDirection}>
      {title && <h2>{title}</h2>}
      <ul className={displayDirection}>{children}</ul>
      <Button label="Close" clickHandler={closeHandler} />
    </div>
  );
};

export default Nav;
