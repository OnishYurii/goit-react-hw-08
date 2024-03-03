import { createSelector } from '@reduxjs/toolkit';
import Fuse from 'fuse.js';

export const selectFilter = state => state.filters.value;
export const selectContactsItem = state => state.contacts.items;
export const selectLoadingStatus = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectFilter, selectContactsItem],
  (filter, data) => {
    if (filter.trim() === '') {
      return data;
    } else {
      const fuse = new Fuse(data, {
        includeScore: true,
        threshold: 0.2,
        keys: ['name', 'number'],
      });
      const result = fuse.search(filter).map(item => item.item);
      console.log(result);
      return result;
    }
  }
);
