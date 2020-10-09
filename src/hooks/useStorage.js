import { useState, useEffect } from 'react';
import { storage, firestore, timestamp } from '../firebase/firebase.utils';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        //references
        const storageRef = storage.ref(file.name);
        const collectionRef = firestore.collection('images')

        storageRef.put(file).on('state_changed', 
            snapshot => {
                let percentage = Math.round(snapshot.bytesTransferred * 100 / snapshot.totalBytes);
                setProgress(percentage);
            },
            error => {
                setError(error);
            },
            async () => {
                const url = await storageRef.getDownloadURL();
                const createdAt = timestamp();
                collectionRef.add({ url, createdAt });
                setUrl(url);

            }
        )
    }, [file]);

    return { progress, url, error }
};

export default useStorage;