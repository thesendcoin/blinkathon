import { ACTIONS_CORS_HEADERS, ActionsJson } from "@solana/actions";

export const GET = async () => {
  const payload: ActionsJson = {
    rules: [
      {
        pathPattern: "/",
        apiPath: "/api/form/",
      },
      // fallback route
      {
        pathPattern: "/api/form/",
        apiPath: "/api/form/",
      }
    ],
  };

  return Response.json(payload, {
    headers: ACTIONS_CORS_HEADERS,
  });
};
// ensures cors
export const OPTIONS = GET;