import { prisma } from '../configs/prisma-client.config';

export const ArticlesService = {
  async create({ title, exerpt, imageUrl, content, category, userId }: any) {
    const createdArticle = await prisma.article.create({
      data: { title, exerpt, imageUrl, content, category, userId },
    });

    return createdArticle;
  },
  getList() {},
  updateById() {},
  deleteById() {},
};
