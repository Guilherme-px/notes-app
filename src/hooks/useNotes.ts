import { useState } from 'react';
import { api } from '../services/api';
import { INotes } from '../types/interfaces/INotes';

export function useNotes() {
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const createNote = async (newNote: INotes) => {
        await api
            .post('/notes', newNote)
            .then((res) => {
                setMessage(res.data.message);
            })
            .catch((error) => {
                setErrorMessage(error.response.data.message);
            });
    };

    return {
        message,
        errorMessage,
        createNote,
    };
}
