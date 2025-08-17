export default class QueueEntryRepository {
  async getAll() {
    return [
      {
        queueEntryDni: 40225782,
        queueEntryDate: new Date('2025-08-06T08:05:33.000Z'),
        queueEntryType: 2,
      },
      {
        queueEntryDni: 16478996,
        queueEntryDate: new Date('2025-08-06T08:08:05.000Z'),
        queueEntryType: 3,
      },
      {
        queueEntryDni: 20154778,
        queueEntryDate: new Date('2025-08-06T07:50:46.000Z'),
        queueEntryType: 1,
      },
      {
        queueEntryDni: 35578661,
        queueEntryDate: new Date('2025-08-06T08:02:39.000Z'),
        queueEntryType: 1,
      },
      {
        queueEntryDni: 34609500,
        queueEntryDate: new Date('2025-08-06T07:20:27.000Z'),
        queueEntryType: 3,
      },
    ];
  }
}