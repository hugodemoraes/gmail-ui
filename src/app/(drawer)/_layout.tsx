import { Drawer } from "expo-router/drawer";

import { CustomOptions } from "@/types/navigation";

import { DrawerContent } from "@/components/drawerContent";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{ headerShown: false, drawerStyle: { width: "75%" } }}
      drawerContent={(props) => <DrawerContent {...props} />}
      defaultStatus="open"
    >
      <Drawer.Screen
        name="(tabs)"
        options={
          {
            title: "Todas as caixas de entrada",
            iconName: "all-inbox",
            isDivider: true,
            notifications: 13,
          } as CustomOptions
        }
      />
    </Drawer>
  );
}
