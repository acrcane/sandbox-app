import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage"
import { profilesReducer } from "./friendsReducer";
import { modalReducer } from "./ modalSlice";

const profilesConfig = {
    key: 'profiles',
    storage,
    whitelist: ['friends'],
    // blacklist: ['filter']
}

export const store = configureStore({
    reducer: {
        profiles: persistReducer(profilesConfig, profilesReducer), 
        modal: modalReducer
    },
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
    
})

export const persistor = persistStore(store)
