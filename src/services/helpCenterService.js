import api from "./api.js";

export async function searchHelpCenter(query, signal) {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), 8000);
  signal?.addEventListener("abort", () => controller.abort(), { once: true });

  try {
    return await api.post("/help-center/search", { query }, { signal: controller.signal });
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("The Help Center search timed out. Please try again.");
    }
    throw error;
  } finally {
    window.clearTimeout(timeoutId);
  }
}
