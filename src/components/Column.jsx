import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { TaskItem } from "./TaskItem";

export function Column({ title, items }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 mb-3">
          <Input placeholder="Search" />
        </div>
        <div className="flex gap-2 mb-4">
          <Input placeholder="Add item" />
          <Button>Add</Button>
        </div>

        <ul className="space-y-2">
          {items?.map((item) => (
            <TaskItem key={item.id} title={item.title} />
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
