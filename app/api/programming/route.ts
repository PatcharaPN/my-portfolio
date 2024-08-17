import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET() {
  const programming = [
    { id: 1, name: "Javascript", icon: "logos:javascript" },
    { id: 2, name: "TypeScript", icon: "devicon:typescript" },
    { id: 3, name: "Dart", icon: "logos:dart" },
    { id: 4, name: "Go", icon: "logos:go" },
  ];
  //
  return NextResponse.json(programming);
}
