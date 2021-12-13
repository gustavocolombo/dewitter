import prismaClient from "../prisma";

export default class AddLikeService {
  async execute(message_id: string) {
    const messageWithNewLikes = await prismaClient.message.update({
      where: { id: message_id },
      data:{
        likes: {
          increment: 1,
        }
      },
      include:{
        user: true
      }
    });

    return messageWithNewLikes;
  }
}
