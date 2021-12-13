import { Request, Response } from "express";
import OAuthenticateUserService from "../services/OAuthenticateUserService";

export default class OAuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { code } = request.body;
    const service = new OAuthenticateUserService();

    const newOAuth = await service.execute(code);

    return response.json(newOAuth);
  }
}
