import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import TransactionsRepository from '../repositories/TransactionsRepository';

interface RequestId {
  id: string;
}
class DeleteTransactionService {
  public async execute(id: RequestId): Promise<void> {
    const transactionsRepository = await getCustomRepository(
      TransactionsRepository,
    );

    const transaction = await transactionsRepository.findOne(id);

    if (!transaction) {
      throw new AppError('The ID is not a valid transaction.');
    }

    await transactionsRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
