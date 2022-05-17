import { useInfiniteQuery } from 'react-query';
import SearchAPI from '../api/search';

const useSearchQuery = item => {
  const fetchResult = async ({ pageParam = 0 }) => {
    if (item !== '') {
      const response = await SearchAPI.searchPageQuery(item, pageParam);
      const result = response.data;
      return {
        result: result['result'] || {},
        nextPage: pageParam + 1,
        isLastPage: result['result'].length < 20,
      };
    }
  };

  const query = useInfiniteQuery(['search', item], fetchResult, {
    getNextPageParam: (lastPage, pages) => {
      if (!lastPage?.isLastPage) return lastPage?.nextPage;
      return undefined;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    refetchOnReconnect: true,
    retry: 1,
    cacheTime: 60 * 1000,
  });

  return query;
};

export default useSearchQuery;
