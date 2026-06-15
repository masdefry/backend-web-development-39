import { prisma } from '../configs/prisma-client.config';

export const ArticlesService = {
  async create({ title, exerpt, imageUrl, content, category, userId }: any) {
    const createdArticle = await prisma.article.create({
      data: { title, exerpt, imageUrl, content, category, userId },
    });

    return createdArticle;
  },
  async getList(page: number, limit: number) {
    const offset = (page - 1) * limit;

    const articlesData = await prisma.article.findMany({
      skip: offset,
      take: limit,
      include: {
        users: true
      }
    });

    const totalArticlesData = await prisma.article.count();

    return {
      articlesData,
      meta: {
        page,
        limit,
        totalData: totalArticlesData,
        totalPage: Math.ceil(totalArticlesData / limit),
      },
    };
  },
  updateById() {},
  deleteById() {},
};
