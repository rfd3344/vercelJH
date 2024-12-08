
// import apiSlice from 'src/core/redux/apiSlice';


// const extendedApi = apiSlice.injectEndpoints({
//   endpoints: (build) => ({

//     getUserList: build.query<any, void>({
//       query: () => '/user/index.json',
//     }),

//     getUserById: build.query({
//       query: (id) => `/user/${id}.json`,
//     }),

//     getProductList: build.query<any, void>({
//       query: (id) => `/product/index.json`,
//     }),
//     getProductById: build.query({
//       query: (id) => `/product/${id}.json`,
//     }),

//   }),

//   overrideExisting: 'throw',
// })


// export const {
//   useGetUserListQuery,
//   useGetUserByIdQuery,
//   useGetProductListQuery,
//   useGetProductByIdQuery,
// } = extendedApi