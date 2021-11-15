import React from 'react'
import { ScrollView, View } from 'react-native'
import { Title } from 'react-native-paper'
import { useFocusEffect } from '@react-navigation/native'

import { getMeApi } from  '../../api/user'
import AuthContext from '../../hooks/useAuth'

import Header from '../../components/Header'
import Loading from '../../components/Loading'
import { UserInfo, Menu } from '../../components/Account'

import { layoutStyles } from '../../styles'
import COLORS from '../../constants/colors'

export default function Account({ navigation }) {
    const [user, setUser] = React.useState(null)
    const { auth } = AuthContext()

    useFocusEffect(
        React.useCallback(() =>{
            (async() => {
                const res = await getMeApi(auth.token)
                setUser(res)
            })()
        },[])
    )

    return (
        <>
            <Header backgroundColor='#FFF'>
                <Title>Account</Title>
            </Header>
            {!user
                ? <Loading size={100} color={COLORS.secondary} text='Getting info...' topRange={50}/>
                : (
                    <View style={layoutStyles.container}>
                        <ScrollView>
                            <UserInfo user={user}/>
                            <Menu />
                        </ScrollView>
                    </View>
                )
            }
        </>
    )
}
