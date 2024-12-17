
import apiSlice from 'src/core/redux/apiSlice';


const extendedApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({

    getUserList: build.query<any, void>({
      query: () => '/user/index.json',
    }),
    getUserById: build.query<any, number>({
      query: (id) => `/user/${id}.json`,
    }),

    getProductList: build.query<any, void>({
      query: () => '/product/index.json',
    }),
    getProductById: build.query<any, number>({
      query: (id) => `/product/${id}.json`,
    }),

    getCatList: build.query<any, void>({
      query: () => `api/cat`,
    }),
    getCatItem: build.query<any, number>({
      query: (id) => `api/cat/${id}`,
    }),

  }),

  // overrideExisting: 'throw',
});


export const {
  useGetUserListQuery,
  useGetUserByIdQuery,
  useGetProductListQuery,
  useGetProductByIdQuery,
  useGetCatListQuery,
  useGetCatItemQuery,
} = extendedApi;