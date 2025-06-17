import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    try {
        const response = await fetch('https://api.vercel.app/blog');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const id = params.id; 

        const postList = await response.json()
        const data = postList.filter(post => post.id.toString() === id)[0];
        
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        return NextResponse.json(
            { error: 'Failed to fetch blog posts' },
            { status: 500 }
        );
    }
}