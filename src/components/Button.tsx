// @ts-ignore
import marketCarIcon from "../assets/images/icon-cart.svg";

const Button = ({ classNames }: IProps) => {
  return (
    <button type="button">
      <img className={classNames} src={marketCarIcon} alt="" />
      Add to Cart
    </button>
  );
};
type IProps = {
  classNames: string;
};
export { Button };
