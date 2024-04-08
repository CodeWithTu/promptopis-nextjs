import { connectToDB } from "@/utils/database";
import Prompt from "@/models/prompt";

export const POST = async (req: any) => {
  const { userId, prompt, tag } = await req.json();
  try {
    await connectToDB();

    const newPromptData = {
      creator: userId,
      prompt,
      tag,
    };
    const newPrompt = new Prompt(newPromptData);
    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
