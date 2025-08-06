import { useAppSelector } from '../../hooks/redux';
import { Sneaker } from '../../types/sneaker';
import SneakerCard from './../common/SneakerCard';

const CatalogSection = () => {
  const { items } = useAppSelector((state) => state.sneakers);
  const { filterBrands, filterSizes, filterPrice } = useAppSelector(
    (state) => state.catalogFilter
  );

  const shouldDisplay = (sneaker: Sneaker) => {
    if (!filterPrice) return;

    // if nothing choosen returns true
    const isBrandMatches =
      filterBrands.find(
        (brand) => brand.name === sneaker.brand && brand.isSelected
      ) || filterBrands.every((brand) => brand.isSelected === false);

    const isPriceMatches =
      filterPrice.min <= sneaker.price && filterPrice.max >= sneaker.price;

    const isSizeMatches =
      filterSizes.find(
        (size) =>
          // cuz sizes have Record type
          Object.prototype.hasOwnProperty.call(sneaker.sizes, size.value) &&
          size.isSelected
      ) || filterSizes.every((size) => size.isSelected === false);

    return isBrandMatches && isSizeMatches && isPriceMatches;
  };

  const filteredData = items.filter((sneaker) => shouldDisplay(sneaker));
  console.log(filteredData);

  return (
    <section className="w-full">
      <h1 className="text-lg font-bold md:text-2xl">Все кроссовки</h1>
      <div className="mt-4 grid grid-cols-[repeat(auto-fill,minmax(9rem,1fr))] gap-x-1 gap-y-4 md:mt-8 md:grid-cols-[repeat(auto-fill,minmax(19rem,1fr))] md:gap-y-16">
        {filteredData.map((sneaker) => (
          <SneakerCard key={sneaker.id} item={sneaker} />
        ))}
      </div>
    </section>
  );
};

export default CatalogSection;
