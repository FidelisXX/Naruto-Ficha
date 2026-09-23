import { BookOpen, Crown, Eye, HeartPulse, Swords, Target } from "lucide-react";
import type { AttributeKey } from "@/lib/rules";

export const ATTRIBUTE_ICONS: Record<AttributeKey, typeof Swords> = {
  for: Swords,
  des: Target,
  con: HeartPulse,
  int: BookOpen,
  sab: Eye,
  car: Crown,
};
