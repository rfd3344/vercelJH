// import React, { useState, useEffect } from 'react';
// import _ from 'lodash';
// import { useNavigate, useLocation } from 'react-router-dom';

// import { useCookie } from 'src/hooks';

// import { RoutePaths } from 'src/constants/routeConst';

// export default function useAuth() {
//   const nav = useNavigate();
//   const { pathname = RoutePaths.Home } = useLocation();
//   const token = useCookie('token');

//   useEffect(() => {
//     if ([RoutePaths.Login, RoutePaths.Test].includes(pathname as RoutePaths)) {
//       return;
//     }

//     if (!token) {
//       nav(RoutePaths.Login);
//       return;
//     }
//   }, [token]);
// }
