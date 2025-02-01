import Image from "next/image";
import { Login } from "./components/auth/AuthButton";


export default function Home() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Login />
    </div>
  );
}
