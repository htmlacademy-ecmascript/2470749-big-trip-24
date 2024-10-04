const TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

const DATE_FORMAT = 'D MMM';
const TIME_FORMAT = 'HH:mm';
const DATE_WITH_TIME_FORMAT = 'DD/MM/YY HH:mm';

const FilterType = {
  EVERYTHING: 'everything',
  PAST: 'past',
  FUTURE: 'future',
  PRESENT: 'present',
};

const SortType = {
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFER: 'offer'
};

const UserAction = {
  UPDATE_TASK: 'UPDATE_POINT',
  ADD_TASK: 'ADD_POINT',
  DELETE_TASK: 'DELETE_POINT',
};

const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
};

export { TYPES, DATE_FORMAT, TIME_FORMAT, DATE_WITH_TIME_FORMAT, FilterType, SortType, UserAction, UpdateType };
