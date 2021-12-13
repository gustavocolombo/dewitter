import prismaClient from '../prisma'

export default class GroupByMostedLikeService {
  async execute(user_id: string) {
    const messagesWithMostLikes = await prismaClient.message.groupBy({
      by: ["likes", "text"],
      orderBy: {
        likes: "desc",
      },
      where: {
        user_id: user_id,
      },
    });

    return messagesWithMostLikes;
  }
}
