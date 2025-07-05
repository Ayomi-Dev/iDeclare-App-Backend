import { Request, Response } from "express";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})


export const personalizeVerse = async (req: Request, res: Response) => {
    const {verse, personalization} = req.body // Assuming the request body contains 'verse' and 'personalization' properties

    if (!verse || !personalization) {
        return res.status(400).json({ error: 'Verse and personalization are required.' });
    }

    try{
        const personalizedText = 'I declare in the name of Jesus that though, in the face of adversity, I may feel overwhelmed\n' + 
        'but I am never alone. God’s unwavering presence is with me. I find strength in my faith and the support of\n' +
         'those around me. I embrace the challenges as opportunities for growth and trust that brighter days are ahead.'; // Placeholder for personalized text
        // const aiResponse = await openai.chat.completions.create({
        //     model: 'gpt-3.5-turbo',
        //     messages: [ 
        //         {
        //             role: 'system',
        //             content: 'You are a helpful assistant that personalizes Bible verses so they can apply it to their situations.'
        //         },
        //         {
        //             role: 'user',
        //             content: `Personalize  this verse: "${verse}" with the following details: ${personalization}`
        //         } 
        //     ],
        //     temperature: 0.7, //
        // }); 

        // const personalizedText = aiResponse.choices[0].message.content
        console.log('Personalized Text:', personalizedText);

        return res.json({ personalizedText }); 
    } catch (error) {
        console.error('Error occurred while personalizing verse:', error);
        return (res as any).status(500).json({ error: 'An error occurred while personalizing your verse.' });
    }
}  