import { redirect } from "next/navigation";
import { data } from "../data";

export const GET = async (request, { params }) => {
  if (parseInt(params.id) > data.length) {
    return redirect("http://localhost:3001/route-handler-get");
  }
  const id = data.find((element) => element.id === parseInt(params.id));
  return Response.json(id);
};

export const PATCH = async (request, { params }) => {
  const body = await request.json();
  const { name } = body;
  const index = data.findIndex((element) => element.id === parseInt(params.id));
  data[index].name = name;
  return Response.json(data[index]);
};
