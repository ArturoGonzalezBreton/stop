import React from "react";

import {
    StyleSheet,
    Text
} from "react-native"

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#212121",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});

const Message = ({title}) => (
    <Text style={styles.appButtonText}>{title}</Text>
);

export default Message;