import { AiOutlineCalendar } from "react-icons/ai";

interface TimelineProps {
  timePoints: FormationType[]
  prefix?: boolean
  sufix?: boolean
}

interface FormationType {
  title: string;
  period: string;
}

export default function Timeline({ timePoints, prefix, sufix }: TimelineProps) {
  return (
    <div className="flex flex-col md:flex-row justify-around h-full md:h-fit w-full relative">
      <div
        className="flex flex-col md:flex-row h-full w-1 md:w-full md:h-1 rounded absolute left-3 md:left-0 md:top-3 -translate-x-1/2 md:-translate-y-1/2 md:-translate-x-0"
      >
        {prefix && (
          <>
            <div className="h-2 w-full md:h-full md:w-2 bg-secondary/50" />
            <div className="h-2 w-full md:h-full md:w-2" />
            <div className="h-2 w-full md:h-full md:w-2 bg-secondary/75" />
            <div className="h-2 w-full md:h-full md:w-2" />
          </>
        )}
        <div className="flex-1 h-2 w-full md:h-full bg-secondary" />
        {sufix && (
          <>
            <div className="h-2 w-full md:h-full md:w-2" />
            <div className="h-2 w-full md:h-full md:w-2 bg-secondary/75" />
            <div className="h-2 w-full md:h-full md:w-2" />
            <div className="h-2 w-full md:h-full md:w-2 bg-secondary/50" />
          </>
        )}
      </div>

      {timePoints.map(item => (
        <div
          className="flex md:flex-col items-center md:justify-start gap-4 md:gap-1 flex-1"
        >
          <div>
            <div className="bg-secondary w-6 aspect-square rounded-full" />
          </div>
          <div className="flex flex-col p-2">
            <label className="text-sm text-start md:text-center">{item.title}</label>
            <label className="w-fit md:w-full text-[10px]">{item.period}</label>
          </div>
        </div>
      ))}
    </div>
  );
}
