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
            .then(async (res) => {
                setMessage(res.data.message);
                await getNotes();
            })
            .catch((error) => {
                setErrorMessage(error.response.data.message);
            });
    };

    const getNotes = async (searchTerm?: string | null) => {
        if (searchTerm !== undefined) {
            await api
                .get(`/notes?search=${searchTerm}`)
                .then((res) => {
                    setNotes(res.data);
                })
                .catch((error) => {
                    setErrorMessage(error.response.data.message);
                });
        } else {
            await api
                .get('/notes')
                .then((res) => {
                    setNotes(res.data);
                })
                .catch((error) => {
                    setErrorMessage(error.response.data.message);
                });
        }
    };

    const updateNotes = async (id: string, updatedNotes: INotes) => {
        await api
            .put(`/notes/${id}`, updatedNotes)
            .then(async (res) => {
                setMessage(res.data.message);
                await getNotes();
            })
            .catch((error) => {
                setErrorMessage(error.response.data.message);
            });
    };

    const deleteNotes = async (id: string) => {
        await api
            .delete(`/notes/${id}`)
            .then(async (res) => {
                setMessage(res.data.message);
                await getNotes();
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
        updateNotes,
        deleteNotes,
        notes,
    };
}
