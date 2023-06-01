import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  colour?:
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  onClick: () => void;
}

const Button = ({ children, colour = "primary", onClick }: Props) => {
  // my solution
  /*return (
    <button type="button" className={"btn btn-" + type}>
      {children}
    </button>
  );*/
  // following along
  return (
    <button className={"btn btn-" + colour} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
