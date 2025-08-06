import priceFormat from '../../utils/priceFormat';

const CheckoutSectionPriceInfo = ({
  text,
  price,
}: {
  text: string;
  price: number;
}) => {
  return (
    <div className="flex justify-between">
      <span className="text-secondary font-medium">{text}</span>
      <span className="font-medium">{priceFormat(price)}</span>
    </div>
  );
};

export default CheckoutSectionPriceInfo;
