type Props = {
    children: string | JSX.Element | JSX.Element[]
    color: string
}

const Title = ({children, color}: Props) => {
  return (
    <>
      <h1 className={`text-3xl font-protest-revolution text-wrap sm:text-4xl md:text-7xl text-center text-${color}`}>{children}</h1>
    </>
  );
};

export default Title;
