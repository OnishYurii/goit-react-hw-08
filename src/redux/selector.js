import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = state => state.filters.name;
export const selectContactsItem = state => state.contacts.items;
export const selectLoadingStatus = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectFilter, selectContactsItem],
  (filter, contacts) => {
    console.log('selectFilteredContacts');
    if (filter.trim() === '') {
      return contacts;
    } else {
      const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
      return filteredContacts;
    }
  }
);
