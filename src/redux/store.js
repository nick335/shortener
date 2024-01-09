"use client"
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import adminsReducer from './features/admins/adminsSlice';
import urlsReducer from './features/urls/urlsSlice';
import userReducer from './features/user/userSlice';
import createUrlReducer from './features/createUrl/createUrlSlice';
import inviteAdminReducer from './features/inviteAdmin/inviteAdminSlice';
import urlsDemoSlice from './features/urlsDemo/urlsDemoSlice';

const rootReducer = combineReducers({
  admins: adminsReducer,
  urlsDemo: urlsDemoSlice,
  user: userReducer,
  urls: urlsReducer,
  createUrl: createUrlReducer,
  inviteAdmin: inviteAdminReducer
})

export const store = configureStore({
  reducer: rootReducer
});