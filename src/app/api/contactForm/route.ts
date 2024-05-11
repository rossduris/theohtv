export async function POST(request: Request) {
  const { name, email, phone, message } = await request.json();

  try {
    const data = { name, email, phone, message };

    return Response.json(data);
  } catch (error) {
    return Response.json(error);
  }
}
