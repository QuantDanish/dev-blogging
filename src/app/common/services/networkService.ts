import data from './data';
import { IBlog } from '../interface';
import { log } from './loggerService';

const get = (): Promise<IBlog[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        (data as IBlog[]).sort((b1: IBlog, b2: IBlog) => b1.index - b2.index)
      );
    }, 1000);
  });
};

const fetchBlogInfo = async (): Promise<IBlog[]> => {
  log('calling fetch blogs :: ');
  const blogs = await get();
  log('return from await :: ', blogs);
  return blogs.map((b: IBlog) => ({ content: '', ...b }));
};

const getBlogByIndex = async (index: number): Promise<IBlog> => {
  log('calling getBlogByIndex with index =  ', index);
  const blogs = await get();
  const currentBlog = blogs.find((b) => b.index === index);
  log('[getBlogByIndex] returning blog. ', currentBlog);
  return currentBlog;
};

export { fetchBlogInfo, getBlogByIndex };
