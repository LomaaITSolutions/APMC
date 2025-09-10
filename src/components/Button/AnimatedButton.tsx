import { a } from "node_modules/framer-motion/dist/types.d-Cjd591yU";
import { Button } from "../ui/button";
// Make sure the path is correct and the file exists
import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
  className?: string;
  onClick?: () => void;
  text: string;
}

export const AnimatedButton = ({
  className,
  onClick,
  text,
}: AnimatedButtonProps) => {
  return (
  <a href="/contact"><Button
      onClick={onClick}
      className={cn(
        "rounded-full gap-2 will-change-transform relative group",
        className
      )}
    >
      {text}
      <div className="bg-white rounded-full relative h-[1.25rem] w-[1.25rem] overflow-hidden">
        <div
          className={cn(
            "w-[0.875rem] h-[0.875rem] absolute transition-transform duration-300 ease-out",
            "left-[calc(50%-7px)] top-[calc(50%-7px)]",
            "group-hover:translate-x-[15px] group-hover:-translate-y-[15px]"
          )}
        >
        </div>
        <div
          className={cn(
            "w-[0.875rem] h-[0.875rem] absolute transition-transform duration-300 ease-out",
            "bottom-[-12px] left-[-12px]",
            "group-hover:translate-x-[15px] group-hover:-translate-y-[15px]"
          )}
        >
        </div>
      </div>
    </Button>
    </a>  
  );
};
