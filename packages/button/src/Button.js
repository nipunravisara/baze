var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import { StyleSheet, TouchableOpacity, Text, } from "react-native";
var Button = function (_a) {
    var title = _a.title, buttonStyle = _a.buttonStyle, titleStyle = _a.titleStyle, activeOpacity = _a.activeOpacity, buttonProps = __rest(_a, ["title", "buttonStyle", "titleStyle", "activeOpacity"]);
    return (React.createElement(TouchableOpacity, __assign({ style: [styles.button, buttonStyle], activeOpacity: activeOpacity || 0.7 }, buttonProps),
        React.createElement(Text, { style: [styles.title, titleStyle] }, title)));
};
var styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 16,
        borderRadius: 4,
        backgroundColor: "#000000", // Base Button's color
    },
    title: {
        fontWeight: "600",
        color: "#ffff", // Base Button's title color
    },
});
export default Button;
