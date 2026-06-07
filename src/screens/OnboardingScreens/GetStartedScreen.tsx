import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const GetStartedScreen = () => {
    const navigation = useNavigation<any>();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.hero}>
                <Image
                    source={require("../../assets/GetStartedLogo.png")}
                    resizeMode="contain"
                    style={styles.heroImage}
                />

                <Image
                    source={require("../../assets/StartFoodLogo.png")}
                    resizeMode="contain"
                    style={styles.foodImage}
                />
            </View>

            <View style={styles.startContainer}>
                <Text style={styles.title}>Order &amp; Let&apos;s eat{"\n"}Healthy food</Text>
                <Text style={styles.description}>
                    Ask not what you can do for your country, Ask what&apos;s for lunch.
                </Text>

                <Pressable onPress={() => navigation.navigate("Auth")} style={({ pressed }) => [styles.continueButton, pressed && styles.continueButtonPressed]}>
                    <Text style={styles.continueText}>Continue</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default GetStartedScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFC529",
    },
    hero: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 14,
    },
    heroImage: {
        width: "86%",
        height: 270,
        marginTop: 8,
    },
    foodImage: {
        width: "88%",
        height: 74,
        marginTop: 5,
    },
    startContainer: {
        minHeight: 290,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 24,
        paddingTop: 34,
        paddingBottom: 28,
    },
    title: {
        color: "#050505",
        fontSize: 31,
        fontWeight: "800",
        lineHeight: 40,
        letterSpacing: 0,
    },
    description: {
        width: "82%",
        color: "#8A8A8A",
        fontSize: 15,
        fontWeight: "500",
        lineHeight: 23,
        marginTop: 14,
    },
    continueButton: {
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFC526",
        borderRadius: 10,
        marginTop: 26,
        shadowColor: "#E6A900",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.22,
        shadowRadius: 12,
        elevation: 5,
    },
    continueButtonPressed: {
        opacity: 0.85,
    },
    continueText: {
        color: "#151515",
        fontSize: 15,
        fontWeight: "800",
    },
});
