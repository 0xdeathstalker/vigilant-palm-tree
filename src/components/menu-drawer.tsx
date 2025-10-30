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
import useMeasure from "react-use-measure";

function MenuDrawer() {
  const { activeMenu, history, openDrawer, goToMenu, goBack } =
    useDrawerStore();
  const [ref, bounds] = useMeasure();

  const currentMenu = activeMenu.length ? activeMenu : menuData;

  function handleOpenDrawer() {
    openDrawer(menuData);
  }

  function handleGoToMenu(items: MenuItem[] | undefined) {
    if (items) {
      goToMenu(items);
    }
  }

  function handleGoBack() {
    goBack();
  }

  return (
    <MotionConfig transition={{ type: "spring", bounce: 0, duration: 0.4 }}>
      <Drawer>
        <DrawerTrigger asChild>
          <Button
            variant="outline"
            className="rounded-full"
            onClick={handleOpenDrawer}
          >
            open drawer
          </Button>
        </DrawerTrigger>

        <DrawerContent
          showHandle={false}
          className="max-w-[500px] mx-4 sm:mx-auto p-3 data-[vaul-drawer-direction=bottom]:bottom-4 data-[vaul-drawer-direction=bottom]:rounded-b-2xl data-[vaul-drawer-direction=bottom]:rounded-t-2xl overflow-hidden"
        >
          <DrawerHeader className="sr-only">
            <DrawerTitle>Nested menu drawer component</DrawerTitle>
            <DrawerDescription>
              Nested menu driver with smooth direction animation.
            </DrawerDescription>
          </DrawerHeader>

          <motion.div animate={{ height: bounds.height }}>
            <div ref={ref}>
              {history.length > 0 ? (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleGoBack}
                    className="mb-3 shadow active:scale-[0.95]"
                  >
                    <ChevronLeft className="size-4" />
                    Back
                  </Button>
                </motion.div>
              ) : null}

              <AnimatePresence mode="popLayout" initial={false}>
                <motion.ul
                  key={history.length}
                  initial={{ x: "110%", opacity: 0 }}
                  animate={{ x: 1, opacity: 1 }}
                  exit={{ x: "-110%", opacity: 0 }}
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

export { MenuDrawer };
