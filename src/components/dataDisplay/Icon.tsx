/****
 * Docs:
 * https://react-icons.github.io/react-icons/
 *
 */

import { FaBeer } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';
import { HiArrowCircleDown } from 'react-icons/hi';
import { GiConfirmed } from 'react-icons/gi';

const IconsMap = {
  GiConfirmed,
  FaBeer,
  HiArrowCircleDown,
};


const SizeClassMap = {
  'xs': 'text-sm',
  'sm': 'text-p',
  'md': 'text-h6',
  'lg': 'text-h4',
  'xl': 'text-h3',
};


interface IProps {
  value?: keyof typeof IconsMap,
  size?: keyof typeof SizeClassMap,
  className?: string
  [key: string]: any
}



export default function Icon({
  size = 'md', // xs, sm, md, lg, xl
  value = 'GiConfirmed',
  className = '',
  ...rest
}: IProps) {


  const Result = IconsMap[value];

  return (
    <Result className={`${className} ${SizeClassMap[size]}`} {...rest} />
  );
}
