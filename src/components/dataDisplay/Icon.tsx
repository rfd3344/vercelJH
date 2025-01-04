/****
 * Docs:
 * https://react-icons.github.io/react-icons/
 *
 */

import { FaBeer } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaGoogleDrive } from 'react-icons/fa';
import { FaRegImages } from 'react-icons/fa';



import { HiArrowCircleDown } from 'react-icons/hi';

import { GiConfirmed } from 'react-icons/gi';

import { MdFormatAlignLeft } from 'react-icons/md';
import { MdFormatAlignCenter } from 'react-icons/md';
import { MdOutlineFormatAlignLeft } from 'react-icons/md';
import { MdDescription } from 'react-icons/md';
import { MdOutlineCalculate } from 'react-icons/md';
import { MdOpenInNew } from 'react-icons/md';
import { MdOutlineMessage } from 'react-icons/md';

import { IoIosColorPalette } from 'react-icons/io';

import { PiNotePencilBold } from 'react-icons/pi';
import { PiLinkFill } from 'react-icons/pi';
import { FcLink } from 'react-icons/fc';

const IconsMap = {
  GiConfirmed,

  FaCalendarAlt,
  FaBeer,
  FaGithub,
  FaGoogleDrive,
  FaRegImages,

  MdOutlineMessage,

  HiArrowCircleDown,

  MdFormatAlignLeft,
  MdFormatAlignCenter,
  MdOutlineFormatAlignLeft,
  MdDescription,
  MdOutlineCalculate,
  MdOpenInNew,

  IoIosColorPalette,

  PiNotePencilBold,
  PiLinkFill,
  FcLink,
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
