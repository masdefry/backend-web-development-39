import { useParams } from 'react-router-dom';
import { axiosInstance } from '../../../utils/axios-instance';
import { useEffect, useState } from 'react';

export default function ArticleDetailPage() {
  const [article, setArticle] = useState({});
  const params = useParams();

  const onGetArticleById = async () => {
    try {
      const res = await axiosInstance.get(`/articles/${params?.id}`);

      setArticle(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onGetArticleById();
  }, []);

  return (
    <>
      <h1 className='text-2xl font-bold mx-10'>{article?.title}</h1>
      <span className='mx-10'>{article.createdAt}</span>
    </>
  );
}
