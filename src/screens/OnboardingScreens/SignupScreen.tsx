import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { FontAwesome6, Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

const SignupScreen = () => {
    const [fullName, setFullName] = useState<string>('');
    const [mailAddress, setMailAddress] = useState<string>('');
    const [focusedInput, setFocusedInput] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <ScrollView
            style={styles.scroll}
            contentContainerStyle={styles.contentContainer}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
        >
            <View style={{ alignItems: 'flex-start', width: '100%' }}>

                <Text style={styles.label}>Full Name</Text>
                <View style={[styles.inputWrapper, focusedInput === 'name' && styles.focusedInputWrapper]}>
                    <Ionicons name="person-outline" size={22} color="black" style={styles.inputIcon} />
                    <TextInput
                        placeholder="John Doe"
                        value={fullName}
                        onChangeText={setFullName}
                        onFocus={() => setFocusedInput('name')}
                        onBlur={() => setFocusedInput('')}
                        placeholderTextColor="black"
                        autoCapitalize="words"
                        style={styles.input}
                    />
                </View>

                <Text style={styles.label}>Email Address</Text>
                <View style={[styles.inputWrapper, focusedInput === 'email' && styles.focusedInputWrapper]}>
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

                <Text style={styles.label}>Password</Text>
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

                <Pressable style={({ pressed }) => [styles.signupButton, pressed && styles.signupButtonPressed]}>
                    <Text style={styles.continueText}>Sign Up</Text>
                </Pressable>
            </View>

            <View style={styles.separator}>
                <View style={styles.separatorLine} />
                <Text style={styles.separatorText}>or continue with</Text>
                <View style={styles.separatorLine} />
            </View>

            <View style={styles.socialButtonsContainer}>

                <Pressable onPress={() => alert("facebook signup")} style={styles.socialButtons}>
                    <FontAwesome6 name="facebook-f" size={24} color="black" />
                </Pressable>

                <Pressable onPress={() => alert("google signup")} style={styles.socialButtons}>
                    <FontAwesome6 name="google" size={24} color="black" />
                </Pressable>

                <Pressable onPress={() => alert("instagram signup")} style={styles.socialButtons}>
                    <FontAwesome6 name="instagram" size={24} color="black" />
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default SignupScreen

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    contentContainer: {
        flexGrow: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 28,
        alignItems: "center",
    },
    label: {
        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 2,
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
        borderColor: "#FFC529",
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
    signupButton: {
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
    signupButtonPressed: {
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
})
