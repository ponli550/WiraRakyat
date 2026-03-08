import { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const useGemini = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const processImage = async (imageFile: File, prompt: string) => {
    setLoading(true);
    setError(null);
    try {
      const imageData = await fileToGenerativePart(imageFile);
      const result = await model.generateContent([prompt, imageData]);
      const response = await result.response;
      return response.text();
    } catch (err: any) {
      setError(err.message || 'Failed to process image');
      console.error('Gemini error:', err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const fileToGenerativePart = async (file: File) => {
    return new Promise<{ inlineData: { data: string; mimeType: string } }>((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Data = (reader.result as string).split(',')[1];
        resolve({
          inlineData: {
            data: base64Data,
            mimeType: file.type,
          },
        });
      };
      reader.readAsDataURL(file);
    });
  };

  return { processImage, loading, error };
};
