"use client";
import Typography from "@/components/atoms/Typography";
import { getDay, getDaysInMonth, startOfMonth } from "date-fns";

interface CalendarPostListProps {
  year: number;
  month: number;
  dayList: number[];
}

const CalendarPostList = ({ year, month, dayList }: CalendarPostListProps) => {
  const firstDay = getDay(startOfMonth(new Date(year, month - 1)));
  const totalDays = getDaysInMonth(new Date(year, month - 1));

  const calendar = Array(firstDay)
    .fill(null)
    .concat(Array.from({ length: totalDays }, (_, i) => i + 1));

  const daysInWeek = ["S", "M", "T", "W", "T", "F", "S"];

  return (
    <div className="mr-[45px] w-[350px] border-l-2 px-10">
      <Typography.P2 className="mb-6 font-bold">
        {year} {month.toString().padStart(2, "0")}
      </Typography.P2>

      <div className="mb-2 ml-[-10px] grid grid-cols-7 text-center">
        {daysInWeek.map((day, idx) => (
          <Typography.P3 key={idx} className="font-semibold">
            {day}
          </Typography.P3>
        ))}
      </div>

      <div className="ml-[-10px] grid grid-cols-7 gap-y-2  text-center">
        {calendar.map((day, idx) => (
          <div key={idx} className="h-6">
            {dayList.includes(day!) ? (
              <div className="flex flex-col items-center justify-center">
                <Typography.P3 className="font-bold text-black">
                  {day}
                </Typography.P3>
                <div className="size-1 rounded-full bg-black" />
              </div>
            ) : (
              <Typography.P3 className="text-gray-300">
                {day || ""}
              </Typography.P3>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarPostList;
