import { expectedRanking } from '../test/expectedTestResults.js';
import {
  createNewQueueEntry,
  getQueueEntriesRanking,
} from '../queueEntry-entity.js';
import { getCurrentDate } from '../../Shared/utils.js';

jest.mock('../queueEntry-repository');
jest.mock('../../Shared/utils.js');

describe('test QueueEntryEntity', () => {
  it('Should create a new queue entry object', async () => {
    const dNI = 40398115;
    const type = 1;
    currentDate = getCurrentDate();
    const createNewQueueEntryResult = createNewQueueEntry(dNI, type);
    expect(JSON.stringify(createNewQueueEntryResult)).toEqual(
      JSON.stringify({
        queueEntryDate: currentDate,
        queueEntryDni: dNI,
        queueEntryType: type,
      })
    );
  });

  it('Should rank the entries as expected', async () => {
    const getRankingResult = await getQueueEntriesRanking();
    expect(JSON.stringify(getRankingResult)).toEqual(
      JSON.stringify(expectedRanking)
    );
  });
});
