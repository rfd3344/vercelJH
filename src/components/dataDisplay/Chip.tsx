// import _ from 'lodash';

// type IProps = {
//   [key: string]: any;
// };

// export default function Chip({
//   value = '',
//   valueMap = {
//     value: {
//       color: '',
//       content: '',
//     },
//   },
//   ...rest
// }: IProps) {

//   const color = valueMap[value]?.color || 'secondary';
//   const label = valueMap[value]?.content || value;

//   const textColor = `text-${color}`;
//   const bgColor = `bg-${color}/20`;

//   return (
//     <div className={`${textColor} ${bgColor} rounded-md px-1  hover:text-white `}>
//       {label}
//     </div>
//   );
//   return (
//     <div
//       label={label}
//       sx={{
//         color: color,
//         backgroundColor: colorBackground,
//         ...sx,
//       }}
//       {...rest}
//     />
//   );
// }
