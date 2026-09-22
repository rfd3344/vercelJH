// import React, { useState, useEffect } from 'react';
// import _ from 'lodash';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

// import { useCookie } from '@/hooks';
// import { setCookie } from '@/utils/cookieUtils';
// import { fetchUserDetails } from '@/pages/auth/meSlice';
// import { fetchCountryDetails } from '@/core/coreSlice';

// import { RoutePaths } from '@/constants/routeConst';

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
