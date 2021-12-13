import { Request, Response } from "express";
import GroupByMostedLikeService from "../services/GroupByMostedLikedService";

export default class GroupByMostedLikeController{
  async handle(request: Request, response: Response){

    const {user_id} = request;

    const service = new GroupByMostedLikeService();

    const messagesWithMoreLikes = await service.execute(user_id);
    
    return response.json(messagesWithMoreLikes);
  }
}