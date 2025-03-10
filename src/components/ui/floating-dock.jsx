import Link from "next/link";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export const FloatingDock = ({ items, className }) => {
  return (
      <>
        <FloatingDockDesktop items={items} className={className} />
      </>
  );
};

const FloatingDockDesktop = ({ items, className }) => {
  let mouseX = useMotionValue(Infinity);
  return (
      <div className={cn(
                "mx-auto flex h-16 gap-4 items-end  rounded-2xl px-4 pb-3",
                className
            )}>
        {items.map((item) => (
            <IconContainer mouseX={mouseX} key={item.title} {...item} />
        ))}
      </div>
  );
};

function IconContainer(
  {
    mouseX,
    title,
    icon,
    href
  }) {
  let ref = useRef(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
      <Link target="_blank" href={href}>
        <motion.div
            ref={ref}
            style={{ width, height }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="aspect-square rounded-full bg-neutral-800 dark:bg-neutral-800 flex items-center justify-center relative">
          <AnimatePresence>
            {hovered && (
                <motion.div
                    initial={{ opacity: 0, y: 10, x: "-50%" }}
                    animate={{ opacity: 0, y: 0, x: "-50%" }}
                    exit={{ opacity: 0, y: 2, x: "-50%" }}
                    className="px-2 py-0.5 whitespace-pre rounded-md bg-neutral-800 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs">
                  {title}
                </motion.div>
            )}
          </AnimatePresence>
          <motion.div
              style={{ width: widthIcon, height: heightIcon }}
              className="flex items-center justify-center">
            {icon}
          </motion.div>
        </motion.div>
      </Link>
  );
}
