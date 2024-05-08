import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { EmailDataProps } from "@/utils/emails";
import { colors } from "@/styles/colors";
import { Avatar } from "@/components/avatar";

type EmailProps = {
  data: EmailDataProps;
};

export function Email({ data }: EmailProps) {
  return (
    <View className="w-full flex-row gap-4">
      <Avatar source={{ uri: data.avatar }} />

      <View className="flex-1">
        <View className="flex-row items-center gap-1">
          {data.marker && (
            <MaterialIcons
              name="label-important"
              size={16}
              color={colors.yelllow[600]}
            />
          )}

          <Text className="text-lg font-subtitle text-gray-400 flex-1">
            {data.name}
          </Text>

          <Text className="text-sm font-body text-gray-400">{data.date}</Text>
        </View>

        <Text
          className="text-base font-body text-gray-400"
          numberOfLines={1}
          lineBreakMode="tail"
        >
          {data.subject}
        </Text>

        <View className="flex-row items-center gap-4">
          <Text
            className="text-base font-body text-gray-400 flex-1"
            numberOfLines={1}
            lineBreakMode="tail"
          >
            {data.message}
          </Text>

          <MaterialIcons
            name={data.star ? "star" : "star-outline"}
            size={22}
            color={data.star ? colors.yelllow[600] : colors.blue[600]}
          />
        </View>
      </View>
    </View>
  );
}
