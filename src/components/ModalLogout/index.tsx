import React, { ReactNode } from 'react';

import { View, Modal, ModalProps, Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'

import { Background } from "../Background";

type Props = ModalProps & {
    ButtonNo: any,
    ButtonYes: any,
}

export function ModalLogout({ ButtonNo, ButtonYes, ...rest }: Props) {
    return (
        <Modal
            transparent
            animationType="fade"
            statusBarTranslucent
            {...rest}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Background>
                        <View style={styles.content}>
                            <Text style={styles.title}>
                                Deseja sair do Game
                                <Text style={styles.titleSecondColor}>
                                    Play
                                </Text>
                                ?
                            </Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                onPress={ButtonNo}
                                activeOpacity={0.7}
                                style={styles.buttonNo}
                            >
                                <Text style={styles.textButton}>
                                    Não
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={ButtonYes}
                                activeOpacity={0.7}
                                style={styles.buttonYes}
                            >
                                <Text style={styles.textButton}>
                                    Sim
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </Background>
                </View>
            </View>
        </Modal>
    )
}