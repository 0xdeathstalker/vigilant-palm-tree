import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { menuData, type MenuItem } from "@/lib/data";
import { useDrawerStore } from "@/store/drawer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import * as React from "react";
import useMeasure from "react-use-measure";
import { variants } from "./motion";

type DirectionState = -1 | 1;

function MenuDrawer() {
  const { activeMenu, history, goToMenu, goBack } = useDrawerStore();
  const [ref, bounds] = useMeasure();
  const [direction, setDirection] = React.useState<DirectionState>(1);

  const currentMenu = activeMenu.length ? activeMenu : menuData;

  function handleGoToMenu(items: MenuItem[] | undefined) {
    if (items) {
      setDirection(1);
      goToMenu(items);
    }
  }

  function handleGoBack() {
    setDirection(-1);
    goBack();
  }

  return (
    <MotionConfig transition={{ type: "spring", bounce: 0, duration: 0.25 }}>
      <Drawer>
        <DrawerTrigger asChild>
          <Button
            variant="outline"
            className="rounded-full bg-blue-500 hover:bg-blue-600 text-white hover:text-white"
          >
            Open Menu
          </Button>
        </DrawerTrigger>

        <DrawerContent
          showHandle={false}
          className="max-w-[500px] mx-4 sm:mx-auto p-3 data-[vaul-drawer-direction=bottom]:bottom-4 data-[vaul-drawer-direction=bottom]:rounded-b-2xl data-[vaul-drawer-direction=bottom]:rounded-t-2xl data-[vaul-drawer-direction=bottom]:max-h-[90vh] overflow-hidden"
        >
          <DrawerHeader className="sr-only">
            <DrawerTitle>Nested menu drawer component</DrawerTitle>
            <DrawerDescription>
              Nested menu driver with smooth direction animation.
            </DrawerDescription>
          </DrawerHeader>

          <motion.div
            animate={{ height: bounds.height }}
            className="overflow-y-auto overflow-x-hidden"
          >
            <div ref={ref}>
              {history.length > 0 ? (
                <BackButton handleGoBack={handleGoBack} />
              ) : null}

              <AnimatePresence
                mode="popLayout"
                initial={false}
                custom={direction}
              >
                <motion.ul
                  key={history.length}
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  custom={direction}
                  className="space-y-2"
                >
                  {currentMenu.map((menu) => (
                    <li
                      key={menu.label}
                      onClick={() => handleGoToMenu(menu.items)}
                      className="w-full hover:bg-muted px-4 py-2 rounded-md"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <menu.icon className="size-4 mt-1" />

                          <div>
                            <h3 className="text-sm">{menu.label}</h3>

                            <p className="text-muted-foreground text-xs">
                              {menu.description}
                            </p>
                          </div>
                        </div>

                        {menu.items && menu.items.length > 0 && (
                          <ChevronRight className="size-4" />
                        )}
                      </div>
                    </li>
                  ))}
                </motion.ul>
              </AnimatePresence>
            </div>
          </motion.div>
        </DrawerContent>
      </Drawer>
    </MotionConfig>
  );
}

function BackButton({ handleGoBack }: { handleGoBack: () => void }) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Button
        variant="ghost"
        size="sm"
        onClick={handleGoBack}
        className="mb-3 active:scale-[0.95]"
      >
        <ChevronLeft className="size-4" />
        Back
      </Button>
    </motion.div>
  );
}

export { MenuDrawer };
