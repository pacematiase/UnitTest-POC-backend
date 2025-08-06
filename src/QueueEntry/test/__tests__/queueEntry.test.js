import { expectedRanking } from '../expectedRanking.js';
import { getQueueEntriesRanking } from '../../queueEntry-entity.js';

describe('test QueueEntrys', () => {
  it('Should rank the items as expected', async () => {
    const getRankingResult = await getQueueEntriesRanking();
    expect(JSON.stringify(getRankingResult)).toEqual(
      JSON.stringify(expectedRanking)
    );
  });
});
