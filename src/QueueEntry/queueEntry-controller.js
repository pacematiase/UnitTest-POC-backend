// API responses handling module

import {
  addQueueEntry,
  findAllQueueEntries,
  getQueueEntriesRanking,
  callNextQueueEntry,
} from './queueEntry-entity.js';

export async function add(req, res) {
  try {
    const item = {
      queueEntryDni: req.body.queueEntryDni,
      queueEntryType: req.body.queueEntryType,
    };
    const result = await addQueueEntry(item);
    res.status(200).json({
      message: 'Queue entry successfully created',
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      message: 'There was an unexpected error while creating the queue entry',
      data: err.message,
    });
  }
}

export async function findAll(req, res) {
  try {
    const queueEntrys = await findAllQueueEntries();
    res.status(200).json({
      message: 'Queue entries successfully retrieved',
      data: queueEntrys,
    });
  } catch (err) {
    res.status(400).json({
      message: 'There was an error while querying the queue entries',
      data: err.message,
    });
  }
}

export async function getRanking(req, res) {
  try {
    const queueEntrys = await getQueueEntriesRanking();
    res.status(200).json({
      message: 'Queue ranking successfully retrieved',
      data: queueEntrys,
    });
  } catch (err) {
    res.status(400).json({
      message: 'There was an error while ranking the queue entries',
      data: err.message,
    });
  }
}

export async function callNext(req, res) {
  try {
    const queueEntry = await callNextQueueEntry();
    res.status(200).json({
      message: 'Next queue retrieved successfully',
      data: queueEntry,
    });
  } catch (err) {
    res.status(400).json({
      message: 'There was an error while retrieving the next queue entry',
      data: err.message,
    });
  }
}
