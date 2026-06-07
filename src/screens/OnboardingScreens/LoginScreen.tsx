import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { FontAwesome6, Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

const LoginScreen = () => {
    const [mailAddress, setMailAddress] = useState<string>('');
    const [focusedInput, setFocusedInput] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.contentContainer}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.heroContainer}>
                    <Text style={styles.title}>Hello!</Text>
                    <Text style={styles.description}>Welcome to Hunger Station</Text>
                    <Image style={styles.chef} source={require("../../assets/cheflogo.png")} />
                </View>

                {/* Login Container */}
                <View style={styles.loginContainer}>
                    <Text style={{ fontSize: 20 }}>Login</Text>
                    {/* login form */}
                    <View style={{ alignItems: 'flex-start', width: '100%' }}>

                        <Text style={{ fontSize: 15, fontWeight: 'bold', marginBottom: 2 }}>Email Address</Text>
                        <View style={styles.inputWrapper}>
                            <Ionicons name="mail-unread-outline" size={22} color="black" style={styles.inputIcon} />
                            <TextInput
                                placeholder="joE0O@example.com"
                                value={mailAddress}
                                onChangeText={setMailAddress}
                                onFocus={() => setFocusedInput('email')}
                                onBlur={() => setFocusedInput('')}
                                placeholderTextColor="black"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                style={styles.input}
                            />
                        </View>

                        <Text style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 2 }}>Password</Text>
                        <View style={[styles.inputWrapper, focusedInput === 'password' && styles.focusedInputWrapper]}>
                            <Ionicons name="lock-closed" size={22} color="black" style={styles.inputIcon} />
                            <TextInput
                                placeholder="Enter your password"
                                value={password}
                                onChangeText={setPassword}
                                onFocus={() => setFocusedInput('password')}
                                onBlur={() => setFocusedInput('')}
                                placeholderTextColor="black"
                                secureTextEntry={!isPasswordVisible}
                                style={styles.input}
                            />
                            <Pressable onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                                <Ionicons
                                    name={isPasswordVisible ? "eye-off-outline" : "eye-outline"}
                                    size={22}
                                    color="black"
                                />
                            </Pressable>
                        </View>

                        <Pressable style={({ pressed }) => [styles.loginButton, pressed && styles.loginButtonPressed]}>
                            <Text style={styles.continueText}>log In</Text>
                        </Pressable>
                    </View>

                    <View style={styles.separator}>
                        <View style={styles.separatorLine} />
                        <Text style={styles.separatorText}>or continue with</Text>
                        <View style={styles.separatorLine} />
                    </View>

                    {/* social login buttons */}
                    <View style={styles.socialButtonsContainer}>

                        <Pressable onPress={() => alert("facebook signin")} style={styles.socialButtons}>
                            <FontAwesome6 name="facebook-f" size={24} color="black" />
                        </Pressable>

                        <Pressable onPress={() => alert("google signin")} style={styles.socialButtons}>
                            <FontAwesome6 name="google" size={24} color="black" />
                        </Pressable>

                        <Pressable onPress={() => alert("instagram signin")} style={styles.socialButtons}>
                            <FontAwesome6 name="instagram" size={24} color="black" />
                        </Pressable>
                    </View>

                    <View style={styles.createAccountContainer}>
                        <Text style={styles.createAccountText}>Don't have an account?</Text>
                        <Pressable>
                            <Text style={styles.createAccountLink}>Create new account</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFC529",
        position: "relative",
    },
    scroll: {
        flex: 1,
    },
    contentContainer: {
        flexGrow: 1,
        paddingHorizontal: 8,
    },
    heroContainer: {
        minHeight: 220,
        width: 200,
        alignItems: "flex-start",
        justifyContent: "center",
        gap: 4,
        paddingHorizontal: 8,
        paddingVertical: 34,
    },
    title: {
        fontSize: 50,
        fontWeight: "800",
        color: "#151515",
    },
    description: {
        fontSize: 20,
        fontWeight: "800",
        color: "#151515",
        flexShrink: 1,
    },
    chef: {
        position: "absolute",
        right: 0,
        top: "40%",
        left: "75%",
        width: 260,
        height: 320,
        resizeMode: "contain",
        transform: [{ translateY: -110 }],
    },
    loginContainer: {
        flexGrow: 1,
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 24,
        paddingTop: 18,
        paddingBottom: 28,
    },
    inputWrapper: {
        width: "100%",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 16,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 12,
        marginBottom: 10,
        padding: 5,
    },
    focusedInputWrapper: {
        borderColor: "#85CC17",
        borderWidth: 2,
    },
    inputIcon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        paddingVertical: 10,
        borderColor: "black",
    },
    loginButton: {
        height: 50,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFC526",
        borderRadius: 10,
        marginTop: 14,
        shadowColor: "#E6A900",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.22,
        shadowRadius: 12,
        elevation: 5,
    },
    loginButtonPressed: {
        opacity: 0.85,
    },
    continueText: {
        color: "#151515",
        fontSize: 15,
        fontWeight: "800",
    },
    socialButtonsContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
    },
    separator: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        marginTop: 28,
        marginBottom: 18,
    },
    separatorLine: {
        flex: 1,
        height: 1,
        backgroundColor: "#D8D8D8",
    },
    separatorText: {
        color: "#8A8A8A",
        fontSize: 13,
        fontWeight: "700",
    },
    socialButtons: {
        width: 52,
        height: 52,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
    },
    createAccountContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 5,
        marginTop: 22,
    },
    createAccountText: {
        color: "#555555",
        fontSize: 14,
        fontWeight: "600",
    },
    createAccountLink: {
        color: "#151515",
        fontSize: 14,
        fontWeight: "800",
        textDecorationLine: "underline",
    },
})
