import { Request, Response } from "express";
import { ListUserScoresUseCase } from "./ListUserScoresUseCase";

export class ListUserScoresController {
  constructor(
    private listUserScoresUseCase: ListUserScoresUseCase
  ) { }

  async handle(request: Request, response: Response) {
    const { user_id } = request.params;

    const { limit, offset } = request.query;

    const userScores = await this.listUserScoresUseCase.execute(
      Number(user_id),
      Number(limit),
      Number(offset)
    );

    return response.json(userScores);
  }
}
