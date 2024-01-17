import { data } from "./data";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  const queryValue = query
    ? data.filter((element) => element.name.includes(query))
    : data;

  return Response.json(queryValue);
}

export const POST = async (request) => {
  const text = await request.json();
  const newText = {
    id: data.length + 1,
    name: text.name,
  };
  data.push(newText);

  return new Response(JSON.stringify(newText), {
    headers: {
      "content-type": "application/json",
    },
    status: 201,
  });
};
