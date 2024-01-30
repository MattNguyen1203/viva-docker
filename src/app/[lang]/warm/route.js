export async function GET(request) {
	return new Response(JSON.stringify({"status": "ok"}), {status: 200})
}