import { createSlice } from "@reduxjs/toolkit";


interface LanguageState {
    language: string;
}

const initialState: LanguageState = {
    language: "english"
}

const languageSlice = createSlice({
    name: "languageTogle",
    initialState,
    reducers: {
        changeToEnglish: (state) => {
            state.language = "english"
        },
        changeToPortuguese: (state) => {
            state.language = "portuguese"
        }
    },
})

export const {changeToEnglish, changeToPortuguese} = languageSlice.actions

export default languageSlice.reducer