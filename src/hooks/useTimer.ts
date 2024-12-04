// import _ from 'lodash';
// import React, { useState, useEffect } from 'react';

// /**********
//  * setTimeout hook
//  *
//  * @param {Function} executor
//  * @param {Array} dependencies
//  * @param {Number} delay - miliseconds to wait, 10 seconds default
//  *
//  */
// export default function useTimer(
//   executor = () => {},
//   dependencies = [],
//   delay = 10000,
// ) {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       executor();
//     }, delay);
//     return () => clearTimeout(timer);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, dependencies);
// }
