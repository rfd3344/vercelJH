
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
      query: () => 'api/cat',
      // providesTags: (result) => result?.map((item: any) => ({ type: 'Cat', id: item._id }))
      providesTags: ['Cats'],
    }),
    getCatItem: build.query<any, number>({
      query: (id) => `api/cat/${id}`,
    }),

    postCat: build.mutation<any, any>({
      query: (body) => ({
        url: 'api/cat',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Cats'],
    }),

    deleteCat: build.mutation<any, any>({
      query: (id) => ({
        url: `api/cat/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Cats'],
    }),



  }),

  // overrideExisting: 'throw',
});


export const {
  useGetUserListQuery,
  useGetUserByIdQuery,
  useGetProductListQuery,
  useGetProductByIdQuery,
  // getCatList,
  useGetCatListQuery,
  useGetCatItemQuery,
  usePostCatMutation,
  useDeleteCatMutation,

} = extendedApi;

export default extendedApi;