import { Slider, ConfigProvider } from 'antd';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { changePrice } from '../../store/catalogFilterSlice';
import { useState } from 'react';
import { PriceRange } from '../../types/meta';

interface RangeInputProps {
  priceRange: PriceRange | null;
}

const RangeInput = ({ priceRange }: RangeInputProps) => {
  const dispatch = useAppDispatch();
  const { filterPrice } = useAppSelector((state) => state.catalogFilter);
  const [localValue, setLocalValue] = useState([
    filterPrice.min,
    filterPrice.max,
  ]);

  if (!priceRange) return;

  return (
    <ConfigProvider
      theme={{
        components: {
          Slider: {
            dotActiveBorderColor: 'black',
            dotBorderColor: 'black',
            handleActiveColor: 'black',
            handleColor: 'black',
            trackBg: 'black',
            trackHoverBg: 'black',
            colorPrimaryBorderHover: 'black',
            handleActiveOutlineColor: 'transparent',
          },
        },
      }}
    >
      <Slider
        range
        value={localValue}
        min={priceRange.min}
        max={priceRange.max}
        step={100}
        defaultValue={[priceRange.min, priceRange.max]}
        onChange={(value) => setLocalValue(value)} // update ui
        onChangeComplete={
          (value) => dispatch(changePrice({ min: value[0], max: value[1] })) // update store
        }
      />
    </ConfigProvider>
  );
};

export default RangeInput;
