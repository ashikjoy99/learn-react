import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { StatusSelect } from "./StatusSelect";
import { cn } from "../lib/utils";

export function TaskItem({ title = "test" }) {
  return (
    <li className="flex items-center gap-2">
      {false ? (
        <Input />
      ) : (
        <button
          className={cn(
            "flex-1 text-left px-3 py-2 rounded-md border hover:bg-accent hover:text-accent-foreground"
          )}
        >
          {title}
        </button>
      )}

      <StatusSelect />
      <Button variant="ghost">Delete</Button>
    </li>
  );
}
