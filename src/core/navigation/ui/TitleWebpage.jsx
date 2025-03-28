
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { ButtonGroup, RangeSlider } from 'flowbite-react';

import Button from 'src/components/navigation/Button';

import Icon from 'src/components/dataDisplay/Icon';


import { updateWebpage } from 'src/sections/webpage/webpageSlice';

export default function TitleWebpage() {
  const dispatch = useDispatch();
  const { size = 30, alignment = 'center' } = useSelector(
    (state) => state.webpage,
  );

  const handleChange = (e) => {
    const value = e.target.value;
    if (!value) return;
    changeWebpage({
      size: value,
    });
  };

  const handleAlignChange = (value) => {
    changeWebpage({
      alignment: value,
    });
  };


  const changeWebpage = (values) => {
    dispatch(updateWebpage(values));
  };


  return (
    <div  >
      <div >
        <div >
          <RangeSlider
            value={size}
            step={10}
            min={10}
            max={100}
            onChange={handleChange}

          />
          {/* <Slider
            value={size}
            step={10}
            min={10}
            max={100}
            color="secondary"
            onChange={(e, value) => handleChange('size', value)}
          /> */}
        </div>
      </div>
      <div >
        <ButtonGroup outline >
          <Button
            outline
            color="gray"
          >
            <h5>{size / 10 - 1}</h5>
          </Button>
          <Button
            color="gray"
            onClick={() => handleAlignChange('left')}
          >
            {/* <FormatAlignLeftIcon /> */}
            <Icon value='MdFormatAlignLeft' />
          </Button>
          <Button
            color="gray"
            onClick={() => handleAlignChange('center')}
          >
            {/* <FormatAlignCenterIcon /> */}
            <Icon value='MdFormatAlignCenter' />
          </Button>
          <Button
            color="gray"
            onClick={() => handleAlignChange('right')}
          >
            <Icon value='MdOutlineFormatAlignLeft' />
            {/* <FormatAlignRightIcon /> */}
          </Button>
        </ButtonGroup>

      </div>
    </div>
  );
}
