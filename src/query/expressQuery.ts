
import expressSlice from 'src/core/redux/expressSlice';


const extendedApi = expressSlice.injectEndpoints({

  endpoints: (build) => ({

    getDemo: build.query<any, void>({
      query: () => '/demo/test1',
    }),

  }),

});


export const {
  useGetDemoQuery,

} = extendedApi;

export default extendedApi;