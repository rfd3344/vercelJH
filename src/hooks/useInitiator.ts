// import React, { useState, useEffect } from 'react';
// import _ from 'lodash';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

// import { useCookie } from 'src/hooks';
// import { setCookie } from 'src/utils/cookieUtils';
// import { fetchUserDetails } from 'src/pages/auth/meSlice';
// import { fetchCountryDetails } from 'src/core/coreSlice';

// import { RoutePaths } from 'src/constants/routeConst';

// export default function useInitiator() {
//   const dispatch = useDispatch();
//   const nav = useNavigate();

//   const token = useCookie('token');

//   useEffect(() => {
//     if (!token) return;
//     dispatch(fetchUserDetails() as any);

//   }, [token]);

//   useEffect(() => {
//     dispatch(fetchCountryDetails() as any);

//   }, []);
// }
