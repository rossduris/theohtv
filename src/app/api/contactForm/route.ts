export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(res);
  const data = await res.json();

  return Response.json(data);
}
