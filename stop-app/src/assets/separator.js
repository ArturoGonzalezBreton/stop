import React from "react";

import {
  StyleSheet,
  View
} from "react-native"

const Separator = () => <View style={styles.separator} />;
const TextSeparator = () => <View style={styles.textSeparator} />;

const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  textSeparator: {
    marginVertical: 25,
    borderBottomColor: '#737373',
  },
});

export {Separator, TextSeparator}