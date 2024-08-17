import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET() {
  const other = [
    { id: 1, name: "Docker", icon: "logos:docker-icon" },
    { id: 2, name: "Git", icon: "devicon:git" },
    { id: 3, name: "Postman", icon: "logos:postman-icon" },
    { id: 3, name: "Figma", icon: "devicon:figma" },
  ];

  return NextResponse.json(other);
}
