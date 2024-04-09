import { connectToDB } from "@/utils/database";
import Prompt from "@/models/prompt";
// GET (read)

export const GET = async (request: any, { params }: any) => {
  try {
    await connectToDB();

    const prompts = await Prompt.findById(params.id).populate("creator");
    if (!prompt) return new Response("Promp not found", { status: 404 });
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};

// Patch (update)

// Delete (delete)
