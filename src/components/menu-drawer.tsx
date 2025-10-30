import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ChevronRight } from "lucide-react";
import { menuData } from "@/lib/data";

function MenuDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="rounded-full bg-blue-600 hover:bg-blue-700 text-white"
        >
          Open Menu
        </Button>
      </DrawerTrigger>

      <DrawerContent
        showHandle={false}
        className="max-w-[500px] mx-4 sm:mx-auto p-3 data-[vaul-drawer-direction=bottom]:bottom-4 data-[vaul-drawer-direction=bottom]:rounded-b-3xl data-[vaul-drawer-direction=bottom]:rounded-t-3xl data-[vaul-drawer-direction=bottom]:max-h-[90vh] overflow-hidden"
      >
        <DrawerHeader className="sr-only">
          <DrawerTitle>Nested menu drawer component</DrawerTitle>
          <DrawerDescription>
            Nested menu driver with smooth direction animation.
          </DrawerDescription>
        </DrawerHeader>

        <div className="overflow-y-auto">
          <ul className="space-y-2">
            {menuData.map((menu) => (
              <li
                key={menu.label}
                className="w-full hover:bg-muted px-3 py-2 rounded-md"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <menu.icon className="size-4 mt-1.5" />

                    <div>
                      <h3 className="text-base">{menu.label}</h3>

                      <p className="text-muted-foreground text-[12px]">
                        {menu.description}
                      </p>
                    </div>
                  </div>

                  {menu.items && menu.items.length > 0 && (
                    <ChevronRight className="size-4 mt-1" />
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export { MenuDrawer };
