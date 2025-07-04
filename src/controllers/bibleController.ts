import axios from 'axios';
import { Request, Response } from 'express';



export const getVerse = async (req: Request, res: Response) => {
    // const { query } = req.query as { query?: string };// Assuming the query is passed as a string in the request
    const query = req.query.query as string; // Extracting the query parameter from the request
    // const { book, chapter, verse } = query; // Extracting book, chapter, and verse from the query parameters
    if (!query) {
        return (res as any).status(400).json({ error: 'Book, chapter, and verse are required.' });
    }

    try{
        const response = await axios.get(`https://bible-api.com/${encodeURIComponent(query)}`);
        console.log(response.data);
        return res.json(response.data);
    }
    catch (error) {
        console.error('Error fetching verse:', error);
        return res.status(500).json({ error: 'Failed to fetch verse.' });
    }
} 




