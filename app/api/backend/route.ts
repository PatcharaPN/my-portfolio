import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET() {
  const Backend = [
    { id: 1, name: "Nodejs", icon: "logos:nodejs-icon" },
    { id: 2, name: "Expressjs", icon: "simple-icons:express" },
    { id: 3, name: "Nestjs", icon: "logos:nestjs" },
    { id: 4, name: "GraphQL", icon: "logos:graphql" },
    { id: 5, name: "MongoDB", icon: "devicon:mongodb" },
    { id: 6, name: "Postgresql", icon: "logos:postgresql" },
    { id: 7, name: "MySQL", icon: "logos:mysql" },
  ];
  //
  return NextResponse.json(Backend);
}
