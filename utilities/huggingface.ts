import { pipeline } from '@huggingface/transformers';

let questionAnswerer: any = null;

const initializeModel = async () => {
  if (!questionAnswerer) {
    questionAnswerer = await pipeline('question-answering', 'Xenova/distilbert-base-cased-distilled-squad');
  }
  return questionAnswerer;
};

export const sendQueryToHuggingFace = async (userText: string) => {
  try {
    await initializeModel();
    
    const context = "You are a helpful tutor. Provide concise, brief answers to questions.";
    const question = userText;
    
    const result = await questionAnswerer(question, context);
    
    return result.answer || "I'm sorry, I couldn't generate an answer for that question.";
  } catch (error) {
    console.error('Error with Hugging Face model:', error);
    return "Sorry, I encountered an error while processing your question.";
  }
};
