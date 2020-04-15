import { networkService } from 'Services';
import { IBlog } from '../../../common/interface';

export const getMetaBlogs = (): Promise<IBlog[]> =>
  networkService.fetchBlogInfo();
