import { Card as CoreCard, CardProps } from "antd";

const Card: React.FC<CardProps> = ({ children, ...props }): JSX.Element => {
  return <CoreCard {...props}>{children}</CoreCard>;
};

export default Card;
