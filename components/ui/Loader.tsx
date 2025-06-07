import { Loader2 } from "lucide-react";

function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Loader2 className="animate-spin h-20 w-20 text-gray-400" />
    </div>
  );
}

export default Loader;
