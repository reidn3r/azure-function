require('dotenv').config();
import { GoogleGenerativeAI } from "@google/generative-ai";

class Model {
    private client: GoogleGenerativeAI;
    private apiKey:string = process.env.API_KEY;
    private moods: string[] = ["Alegria", "Raiva", "Sarcasmo", "Piada"];

    constructor() {
        this.client = new GoogleGenerativeAI(this.apiKey);
    }

    public async generate(name: string) {
        const prob: number = Math.floor((Math.random() * 100) % 5);
        return await this.buildMessage(name, prob);
    }

    private async buildMessage(name: string, moodIndex: number) {
        const model = this.client.getGenerativeModel({ model: "gemini-1.5-pro" });
        
        const prompt = `Você precisa gerar uma mensagem de ${this.moods[moodIndex]} baseado no nome ${name}. Use e abuse de trocadilhos. A mensagem deve ser curta e direta.`;

        const result = await model.generateContent(prompt);
        return result.response.text();
    }
}

export const client = new Model();
