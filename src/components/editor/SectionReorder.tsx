"use client";

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";
import { sectionTitle } from "@/config/i18n";
import { cn } from "@/lib/utils";
import type { SectionId, Locale } from "@/types/resume";

interface SectionReorderProps {
  order: SectionId[];
  locale: Locale;
  onReorder: (order: SectionId[]) => void;
}

function SortableItem({ id, locale }: { id: SectionId; locale: Locale }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id });

  return (
    <li
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
      className={cn(
        "flex items-center gap-2 rounded-md border px-3 py-2 text-sm",
        "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700",
        isDragging && "shadow-md opacity-90 z-10"
      )}
    >
      <button
        type="button"
        className="cursor-grab active:cursor-grabbing text-slate-400 hover:text-slate-600 touch-none"
        {...attributes}
        {...listeners}
        aria-label={`Reorder ${sectionTitle(locale, id)}`}
      >
        <GripVertical className="h-4 w-4" />
      </button>
      <span className="text-slate-700 dark:text-slate-300">
        {sectionTitle(locale, id)}
      </span>
    </li>
  );
}

export function SectionReorder({ order, locale, onReorder }: SectionReorderProps) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = order.indexOf(active.id as SectionId);
      const newIndex = order.indexOf(over.id as SectionId);
      onReorder(arrayMove(order, oldIndex, newIndex));
    }
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={order} strategy={verticalListSortingStrategy}>
        <ul className="space-y-1.5">
          {order.map((id) => (
            <SortableItem key={id} id={id} locale={locale} />
          ))}
        </ul>
      </SortableContext>
    </DndContext>
  );
}
