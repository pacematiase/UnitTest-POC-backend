// Business logic handling module
import QueueEntryRepository from './queueEntry-repository.js';
import { getCurrentDate, isNaturalNumber } from '../Shared/utils.js';

export function createNewQueueEntry(queueEntryDni, queueEntryType) {
  const queueEntry = {
    queueEntryDate: getCurrentDate(),
    queueEntryDni: queueEntryDni,
    queueEntryType: queueEntryType,
  };
  return queueEntry;
}

export function rankQueueEntries(queueEntries) {
  const sortedQueueEntries = queueEntries.toSorted((a, b) => {
    return a.queueEntryDate - b.queueEntryDate;
  });
  return sortedQueueEntries;
}

export async function getNextQueueEntry(queueEntries) {
  const sortedQueueEntries = rankQueueEntries(queueEntries);
  return sortedQueueEntries[0];
}

export async function addQueueEntry(item) {
  const repository = new QueueEntryRepository();
  if (
    isNaturalNumber(item.queueEntryDni) &&
    isNaturalNumber(item.queueEntryType) &&
    item.queueEntryType < 4
  ) {
    let queueEntry = await repository.getOne(item.queueEntryDni);
    if (queueEntry === null) {
      queueEntry = createNewQueueEntry(item.queueEntryDni, item.queueEntryType);
      await repository.add(queueEntry);
    } else {
      queueEntry = repository.updateType(queueEntry, item.queueEntryType);
    }
    return queueEntry;
  } else {
    throw new Error(
      `addQueueEntry function expects a numeric queueEntryType between 1 and 3 and a higher than zero DNI. You sent: ${JSON.stringify(
        item
      )}`
    );
  }
}

export async function findAllQueueEntries() {
  const repository = new QueueEntryRepository();

  const queueEntries = await repository.getAll();

  return queueEntries;
}

export async function getQueueEntriesRanking() {
  const repository = new QueueEntryRepository();
  const queueEntries = await repository.getAll();

  const sortedQueueEntries = rankQueueEntries(queueEntries);

  return sortedQueueEntries;
}

export async function callNextQueueEntry() {
  const repository = new QueueEntryRepository();
  const queueEntries = await repository.getAll();
  const queueEntry = await getNextQueueEntry(queueEntries);
  if (queueEntry !== undefined) {
    const resDelete = await repository.deleteOne(queueEntry.queueEntryDni);
    return queueEntry;
  } else {
    throw new Error('There are no pending queue entries');
  }
}
