import type { ComponentChildren } from "preact";

interface Props {
  children?: ComponentChildren;
}

const Main = ({ children }: Props) => {
  return <main class="main">{children}</main>;
};

export default Main;
