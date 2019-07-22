import React, { Component } from 'react'
import Dexie from 'dexie';

const db = new Dexie('OfflineDetails');
db.version(1).stores({
    formValues: '++id'
});

export default db;
