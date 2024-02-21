type Props = {
    children: string | JSX.Element | JSX.Element[] 
}

const Title = ({children} :Props) => {
  return (
    <>
      <h1 className="text-3xl font-protest-revolution text-wrap sm:text-4xl md:text-7xl text-center">{children}</h1>
    </>
  );
};

export default Title;
