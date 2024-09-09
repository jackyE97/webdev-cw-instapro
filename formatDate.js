import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";

export const formatRelativeTime = (date) => {
  if (!date || isNaN(new Date(date).getTime())) {
    return "Некорректная дата";
  }

  return formatDistanceToNow(new Date(date), { addSuffix: true, locale: ru });
};
