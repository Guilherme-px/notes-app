import { useState } from 'react';
import { api } from '../services/api';
import { INotes, INotesList } from '../types/interfaces/INotes';

export function useNotes() {
    const [notes, setNotes] = useState<INotesList[]>([]);
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

    const getNotes = async () => {
        await api
            .get('/notes')
            .then((res) => {
                setNotes(res.data);
            })
            .catch((error) => {
                setErrorMessage(error.response.data.message);
            });
    };

    return {
        message,
        errorMessage,
        createNote,
        getNotes,
        notes,
    };
}
