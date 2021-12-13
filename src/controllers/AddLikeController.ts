import { Request, Response } from "express";
import AddLikeService from "../services/AddLikeService";

export default class AddLikeController {
  async handle(request: Request, response: Response) {
    const { message_id } = request.body;

    const service = new AddLikeService();

    const messageWithNewLike = await service.execute(message_id);

    return response.json(messageWithNewLike);
  }
}
