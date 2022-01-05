import React, { useState } from 'react';

import { View } from 'react-native';

export default function RoundedView(props) {
    const [radius, setRadius] = useState(0);

    function onLayout({ nativeEvent }) {
        const { width, height } = nativeEvent.layout;
        let ratio;
        if (Number.isFinite(props.radius) && props.radius >= 0) {
            ratio = props.radius / 100;
        } else {
            ratio = 0.5;
        }
        setRadius(Math.min(width, height) * ratio);
        if (props.onLayout) {
            props.onLayout({ nativeEvent });
        }
    }

    return (
        <View
            style={{
                ...props.style,
                borderRadius: radius,
                borderTopLeftRadius: radius,
                borderTopRightRadius: radius,
                borderTopStartRadius: radius,
                borderTopEndRadius: radius,
                borderBottomLeftRadius: radius,
                borderBottomRightRadius: radius,
                borderBottomStartRadius: radius,
                borderBottomEndRadius: radius,
                overflow: 'hidden',
            }}
            onLayout={onLayout}
        >
            {props.children}
        </View>
    );
}
