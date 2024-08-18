import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET() {
  const frontend = [
    { id: 1, name: "React", icon: "logos:react" },
    { id: 2, name: "Nextjs", icon: "teenyicons:nextjs-outline" },
    { id: 3, name: "Flutter", icon: "logos:flutter" },
    { id: 3, name: "Redux", icon: "logos:redux" },

    {
      id: 4,
      name: "Material UI",
      icon: "simple-icons:mui",
      style: { color: "#00e0f9" },
    },
    { id: 5, name: "HTML 5", icon: "vscode-icons:file-type-html" },
    { id: 6, name: "CSS 3", icon: "devicon:css3" },
    { id: 7, name: "SASS", icon: "vscode-icons:file-type-scss" },
    { id: 8, name: "Tailwind", icon: "devicon:tailwindcss" },
    { id: 8, name: "Framer", icon: "teenyicons:framer-solid" },
  ];
  //
  return NextResponse.json(frontend);
}
