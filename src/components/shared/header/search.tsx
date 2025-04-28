import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { APP_NAME } from "@/lib/constants";
import { SearchIcon } from "lucide-react";

const categories = ["men", "women", "kids", "accessories"];
export default async function Search() {
  return (
    <form action="/search" method="GET" className="flex  items-stretch h-10 ">
      <div className="w-auto h-full dark:border-gray-200 bg-gray-100 text-black border-r  rounded-r-none rounded-l-md rtl:rounded-r-md rtl:rounded-l-none  ">
        <Select name="category">
          <SelectTrigger>
            <SelectValue placeholder={"All"} />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="all">All</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Input
        className="flex-1 rounded-none dark:border-gray-200 bg-gray-100 text-black text-base h-full"
        placeholder={`Search Site ${APP_NAME}`}
        name="q"
        type="search"
      />
      <button
        type="submit"
        className="bg-primary  text-black rounded-s-none rounded-e-md h-full px-3 py-2 "
      >
        <SearchIcon className="w-6 h-6" />
      </button>
    </form>
  );
}

// text-primary-foreground
