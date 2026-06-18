import { Request, Response } from "express";
import { ArticlesService } from "../services/articles.service";
import { StatusCodes } from "http-status-codes";

export const ArticlesController = {
    async create(req: Request, res: Response){
        const {title, exerpt, imageUrl, content, category} = req?.body; 
        const {authorization} = req?.headers;
        
        const createdArticle = await ArticlesService.create({title, exerpt, imageUrl, content, category, userId: authorization})
    
        res.status(StatusCodes.CREATED).json({
            success: true, 
            message: 'Article created successfully', 
            data: createdArticle
        })
    },
    async getList(req: Request, res: Response){
        const {page = 1, limit = 10} = req?.query; 

        const {articlesData, meta} = await ArticlesService.getList(parseInt(page as string), parseInt(limit as string))
    
        res.status(StatusCodes.OK).json({
            success: true, 
            message: 'Articles retrieved successfully', 
            data: articlesData, 
            meta
        })
    },
    async getById(req: Request, res: Response){
        const {id} = req.params; 

        const articleData = await ArticlesService.getById(id as string)
    
        res.status(StatusCodes.OK).json({
            success: true, 
            message: `Article with id: ${id} retrived successfully`, 
            data: articleData
        })
    },
    updateById(req: Request, res: Response){},
    deleteById(req: Request, res: Response){}
}