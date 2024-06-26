import { Image, ScrollView, View, Text } from "react-native";
import { DrawerContentComponentProps } from "@react-navigation/drawer";

import { CustomOptions } from "@/types/navigation";

import { DrawerButton } from "@/components/drawerButton";

export function DrawerContent(props: DrawerContentComponentProps) {
  return (
    <View className="flex-1 bg-gray-600 overflow-hidden">
      <View className="mt-20 w-full border-b pb-6 border-gray-500">
        <Image
          source={require("@/assets/logo.png")}
          className="w-28 ml-5"
          resizeMode="contain"
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 42 }}
      >
        <View className="mt-2">
          {props.state.routes.map((route, index) => {
            const isFocused = props.state.index === index;
            const options = props.descriptors[route.key]
              .options as CustomOptions;

            if (options.title === undefined) return;

            const onPress = () => {
              const event = props.navigation.emit({
                type: "drawerItemPress",
                canPreventDefault: true,
                target: route.key,
              });

              if (!isFocused && !event.defaultPrevented)
                props.navigation.navigate(route.name, route.params);
            };

            return (
              <View key={route.key}>
                {options.sectionTitle && (
                  <Text className="text-gray-400 text-sm font-heading uppercase ml-4 mt-6">
                    {options.sectionTitle}
                  </Text>
                )}
                <DrawerButton
                  onPress={onPress}
                  iconName={options.iconName}
                  title={options.title}
                  isDivider={options.isDivider}
                  isFocused={isFocused}
                  notifications={options.notifications}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
