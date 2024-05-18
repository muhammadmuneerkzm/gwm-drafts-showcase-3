// app/api/route.js

export const dynamic = 'force-dynamic'; // defaults to auto

export async function GET(request) {
  try {
    // Perform any server-side logic if needed

    // Respond with the desired JSON
    return new Response(JSON.stringify({ hello: 'oososos' }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error:', error.message);
    // Handle errors and return an appropriate response
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
