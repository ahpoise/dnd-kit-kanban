import { useSortable } from "@dnd-kit/sortable";
import React from "react";
import { classNames } from "../../utils";

const Items = ({ id, title }) => {
  const { attributes, listeners, setNodeRef, isDragging } = useSortable({
    id: id,
    data: {
      type: "item",
    },
  });
  return (
    <button
      className={classNames(
        "px-2 py-4 bg-white shadow-md rounded-xl w-full border border-transparent hover:border-gray-200 cursor-pointer",
        isDragging && "opacity-50"
      )}
      {...listeners}
    >
      <div ref={setNodeRef} {...attributes}>
        <div className="flex items-center justify-between">{title}</div>
      </div>
    </button>
  );
};

export default Items;
