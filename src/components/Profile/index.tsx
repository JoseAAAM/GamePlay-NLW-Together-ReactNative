import React, { useState } from "react";
import {
    View,
    Text,
    Alert,
} from 'react-native'
import { RectButton } from "react-native-gesture-handler";

import { useAuth } from "../../hooks/auth";

import { Avatar } from '../Avatar'
import { ModalLogout } from "../ModalLogout";

import { styles } from './styles'

export function Profile() {
    const { user, signOut } = useAuth();
    const [openModalLogout, setOpenModalLogout] = useState(false)

    // function handleSignOut() {
    //     Alert.alert('Logout', 'Deseja sair do Gameplay?',
    //         [
    //             {
    //                 text: 'Não',
    //                 style: 'cancel'
    //             },
    //             {
    //                 text: 'Sim',
    //                 onPress: () => signOut()
    //             }
    //         ])
    // }

    function handleOpenLogout() {
        setOpenModalLogout(true)
    }

    function handleCloseLogout(){
        setOpenModalLogout(false)
    }

    function handleSignOut() {
        signOut()
    }

    return (
        <>
            <View style={styles.container}>
                <RectButton
                    onPress={handleOpenLogout}
                >
                    <Avatar urlImage={user.avatar} />
                </RectButton>
                <View>
                    <View style={styles.user}>
                        <Text style={styles.greeting}>
                            Olá,
                        </Text>
                        <Text style={styles.username}>
                            {user.firstName}
                        </Text>
                    </View>

                    <Text style={styles.message}>
                        Hoje é dia de vitória
                    </Text>
                </View>
            </View>
            <ModalLogout visible={openModalLogout} ButtonNo={handleCloseLogout} ButtonYes={handleSignOut}/>

        </>
    )
}