import { redirect } from "next/navigation";
import { data } from "../route";

export async function GET(
  req: Request,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) {
  const res = data.filter(({ id }) => id === parseInt(params.id));

  return Response.json(res, { status: 200 });
}
