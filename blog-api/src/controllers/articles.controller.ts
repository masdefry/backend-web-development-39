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
    getList(req: Request, res: Response){},
    updateById(req: Request, res: Response){},
    deleteById(req: Request, res: Response){}
}