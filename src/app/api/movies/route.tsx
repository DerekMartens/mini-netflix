export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get('query');

    if (!query) {
        return Response.json({ error: "Query is required" }, { status: 400 });
    }

    const apiKey = process.env.OMDB_API_KEY;
    const omdbUrl = `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`;

    try {
        const response = await fetch(omdbUrl);
        const data = await response.json();
        return Response.json(data);
    } catch (error) {
        return Response.json({ error: "Failed to fetch data" }, { status: 500 });
    }
}