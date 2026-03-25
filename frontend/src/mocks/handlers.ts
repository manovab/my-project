import { http, HttpResponse } from "msw";

export const handlers = [
  // GET
  http.get("/items", () => {
    return HttpResponse.json([
      { _id: "1", name: "Mock Item 1" },
      { _id: "2", name: "Mock Item 2" }
    ]);
  }),

  // POST
 http.post("/items", async ({ request }) => {
    const body = (await request.json()) as { name?: string };

    // ✅ Validate input
    if (!body?.name) {
      return HttpResponse.json(
        { error: "Name is required" },
        { status: 400 }
      );
    }

    return HttpResponse.json({
      _id: Math.random().toString(),
      name: body.name
    });
  })
];