import { NextResponse, NextRequest } from "next/server";
import { connectToDatabase } from "../../../../lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET() {
  let { db } = await connectToDatabase();
  const tasks = await db.collection("tasks").find().toArray();
  return NextResponse.json({ tasks }, { status: 200 });
}

export async function POST(req) {
  const task = await req.json()
  let { db } = await connectToDatabase();
  await db.collection("tasks").insertOne(task);
  return NextResponse.json({ massage: 'new task' }, { status: 201 });
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get('id')
  let { db } = await connectToDatabase();
  await db.collection("tasks").deleteOne({_id: new ObjectId(id)});
  return NextResponse.json({ massage: 'task deleted' }, { status: 200 });
}

export async function PATCH(req) {
  const updates = await req.json()
  const id = req.nextUrl.searchParams.get('id')
  let { db } = await connectToDatabase();
  await db.collection("tasks").updateOne({_id: new ObjectId(id)}, {$set: updates})
  return NextResponse.json({ massage: 'task updated' }, { status: 200 });
}