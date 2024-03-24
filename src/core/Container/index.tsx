import "./index.moudle.scss";

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children, ...props }): JSX.Element => {
  return (
    <div className="container-main" {...props}>
      {children}
    </div>
  );
};

export default Container;
