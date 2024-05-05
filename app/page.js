import SearchContextProvider from "@/context/search-context";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import SignIn from "@/components/auth/sign_in";

export default async function Home() {
  const session = await getServerSession(options);
  if (session) {
    redirect("/dashboard");
  }
  return (
    <SearchContextProvider>
      <SignIn />
    </SearchContextProvider>
  );
}
