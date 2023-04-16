interface IProps {
  school: string;
  children: JSX.Element;
}

const Example = ({ school, children }: IProps) => {
  return (
    <>
      <div>안녕하세요, 혜주입니다.</div>
      <div>{school}</div>
      <div>{children}</div>
      <div>안녕하세요, 맹구입니다.</div>
    </>
  );
};

export default Example;
