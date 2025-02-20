interface Props {
  children?: React.PropsWithChildren | React.ReactElement;
}

const Main = ({ children }: Props) => {
  return <main class="main">{children}</main>;
};

export default Main;
