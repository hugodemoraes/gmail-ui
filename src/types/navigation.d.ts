import { DrawerNavigationOptions } from "@react-navigation/drawer";
import { IconNameProps } from "@/components/drawerButton";

interface CustomOptions extends DrawerNavigationOptions {
  iconName: IconNameProps;
  isDivider?: boolean;
  notifications?: number;
  sectionTitle?: string;
}
