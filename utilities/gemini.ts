// import { GoogleGenerativeAI } from '@google/generative-ai';

// const geminiApiKey = "AIzaSyBVmw82bpd2KBXxibEoHqqSQiM17LWuwSU";


// if (!geminiApiKey) {
//     throw new Error('VITE_Gemini_API_Key is not defined');
// }

// const genAI = new GoogleGenerativeAI(geminiApiKey);


// const generationConfig = {
//     temperature: 1,      // Controls randomness (0-2): higher = more creative
//     topP: 0.95,         // Nucleus sampling: considers top 95% probable tokens
//     topK: 64,           // Considers only top 64 most likely tokens
//     response_mime_type: 'application/json'  // Returns response as JSON
// };

// const model = genAI.getGenerativeModel({
//     model: 'gemini-pro',  
//     generationConfig
// });

// const mainPrompt =`Response to the following text that starts after "GEMINI_QUERY =>" and only that. 
// Each new prompt should be an entirely new isolated chat prompt.`;

// export const sendQueryToGemini = async (userText: string) => {
//     const prompt = `${mainPrompt} GEMINI_QUERY => ${userText}`;
//     try {
//         const result = await model.generateContent(prompt); // call API and pass it as prompt
//         const response = await result.response; // await API response
//         const text =  await response.text();
//         console.log(text);
//         return "";
//     } catch (err) {
//         console.error('Some error occured', err);
//         return "";
        
//     } 
// }

// import { GoogleGenerativeAI } from "@google/generative-ai";

// const geminiApiKey = import.meta.env.VITE_GEMINI_API_KEY4; // safer than hardcoding

// if (!geminiApiKey) {
//   throw new Error("Gemini API key is not defined");
// }

// const genAI = new GoogleGenerativeAI(geminiApiKey);

// const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

// // This retrieves the query from user after submit button is clicked
// export const sendQueryToGemini = async (userText: string) => {
//   const prompt = `You are a helpful tutor. Give concise, brief answers (2-3 sentences maximum).
//         Response to the following text that starts after "GEMINI_QUERY =>" and only that.
//         GEMINI_QUERY => ${userText}`;
//   try {
//     const result = await model.generateContent({
//       contents: [{ role: "user", parts: [{ text: prompt }] }],
//       generationConfig: {
//         temperature: 1,
//         topP: 0.95,
//         topK: 64,
//         maxOutputTokens: 200 //Limit response needed
//       },
//     });
    
    
//     const text = await result.response.text();

//     // const value = JSON.parse(text);
//     // console.log(value);
//     return text;
//   } catch (err) {
//     console.error("Some error occurred", err);
//     return "";
//   }
// };
