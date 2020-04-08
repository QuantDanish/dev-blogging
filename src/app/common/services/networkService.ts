import data from './data';
import { IBlog } from '../interface';

const get = (): Promise<IBlog[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 3000);
  });
};

const fetchBlogInfo = async () => {
  console.log('calling fetch blogs :: ');
  const blogs = await get();
  console.log('return from await :: ', blogs);
  return blogs.map((b: IBlog) => ({ content: '', ...b }));
};

const getBlogByIndex = async (index: number): Promise<IBlog> => {
  console.log('calling getBlogByIndex with index =  ', index);
  const blogs = await get();
  const currentBlog = blogs.find((b) => b.index === index);
  console.log('[getBlogByIndex] returning blog. ', currentBlog);
  return currentBlog;
};

export { fetchBlogInfo, getBlogByIndex };
