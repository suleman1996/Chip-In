import React from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { font, width } from './Dimensions/dimensions';

const FormInput = (data) => {

    let { error,titleColor,inputStyle, rightIconName, containerStyle, onPressIcon, forgetPassword, forget, textInputContainerStyle, title, predefineContainer, predefineTextStyle, RightIconFamily, iconColorRight, selectable, leftChild,forgotTextColor,rightIcon } = data
    return (
        <View style={containerStyle} >
            <View style={predefineContainer}>
                {title &&
                    <Text style={[styles.predifineText,{color:titleColor}]}>{title}</Text>
                }
                <View style={textInputContainerStyle}>
                    {leftChild &&
                        leftChild
                    }
                    {selectable ?
                        <Text {...data}>{data.value ? data.value : data.placeholder}</Text>
                        :
                        inputStyle ?
                        <TextInput
                            {...data}
                            style={inputStyle && inputStyle}
                        />
                        :
                        <TextInput
                        {...data}
                    />
                    }

                    {rightIcon &&
                          <View style={styles.icon}>
                            {rightIcon}
                          </View>
                        // <RightIconFamily style={{ textAlignVertical: 'center', paddingRight: 20 }} color={iconColorRight} onPress={onPressIcon} size={20} name={rightIconName} />
                    }
                </View>
            </View>
            {error && <Text style={styles.errorText} >{error}</Text>
            }
            {forget &&
                <TouchableOpacity style={{
                    marginTop: 5, alignSelf: 'flex-end', marginBottom: 15, marginHorizontal: width(10),
                }} onPress={forgetPassword}>
                    <Text style={{ color:forgotTextColor,fontWeight:'bold' }}>Forget password?</Text>
                </TouchableOpacity>
            }
        </View>
    );
}
const styles = StyleSheet.create({
    predifineText: {
        fontSize: font(2),
        marginTop: 15,
        marginHorizontal: width(10),
        fontWeight:'bold'
    },
    errorText: {
        color: 'red',
        margin: 1
    },
    icon: {
        // padding: 10,
    },
})

export { FormInput }