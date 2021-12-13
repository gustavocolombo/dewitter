import { Router } from "express";
import AddLikeController from "../controllers/AddLikeController";
import CreateMessageController from "../controllers/CreateMessageController";
import GroupByMostedLikeController from "../controllers/GroupByMostedLikedController";
import OAuthenticateUserController from "../controllers/OAuthenticateUserController";
import ensureAuthenticateUser from "../middlewares/ensureAuthenticateUser";

const routes = Router();

routes.post("/oauthenticate", new OAuthenticateUserController().handle);
routes.post(
  "/messages",
  ensureAuthenticateUser,
  new CreateMessageController().handle
);
routes.put("/add-like", ensureAuthenticateUser, new AddLikeController().handle);
routes.get('/messages/more-likes', ensureAuthenticateUser, new GroupByMostedLikeController().handle);

export default routes;
