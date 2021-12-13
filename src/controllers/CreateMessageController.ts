import { Request, Response } from "express";
import CreateMessageService from "../services/CreateMessageService";

export default class CreateMessageController {
  async handle(request: Request, response: Response) {
    const { text } = request.body;
    const { user_id } = request;

    const service = new CreateMessageService();

    const newMessage = await service.execute(text, user_id);

    return response.json(newMessage);
  }
}
