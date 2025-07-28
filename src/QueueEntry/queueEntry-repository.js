// Database interaction handling module

import { queueEntryModel } from './queueEntry-model.js';

export default class QueueEntryRepository {
  async add(queueEntry) {
    const res = await queueEntryModel.create({
      queueEntryType: queueEntry.queueEntryType,
      queueEntryDni: queueEntry.queueEntryDni,
      queueEntryDate: queueEntry.queueEntryDate,
    });
    return res.dataValues;
  }

  async getAll() {
    return queueEntryModel.findAll();
  }

  async getOne(queueEntryDni) {
    return queueEntryModel.findByPk(queueEntryDni);
  }

  async deleteOne(queueEntryDni) {
    return queueEntryModel.destroy({
      where: {
        queueEntryDni: queueEntryDni,
      },
    });
  }
}
