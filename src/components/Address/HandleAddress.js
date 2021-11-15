import React from 'react'
import { View } from 'react-native'
import { TextInput, Button } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigation } from '@react-navigation/native'

import { layoutStyles, formStyles } from "../../styles";
import COLORS from '../../constants/colors';

import Loading from '../Loading'

import { addAdressApi, getAddressByIdApi, updateAddressApi } from '../../api/address'
import useAuth from  '../../hooks/useAuth'

const INITIAL_VALUES = {
    title: '',
    name: '',
    address: '',
    postal_code: '',
    city: '',
    state: '',
    country: '',
    phone: ''
}

const VALIDATION_SCHEMA = {
    title: Yup.string().required(true),
    name: Yup.string().required(true),
    address: Yup.string().required(true),
    postal_code: Yup.string().required(true),
    city: Yup.string().required(true),
    state: Yup.string().required(true),
    country: Yup.string().required(true),
    phone: Yup.string().required(true),
}

export default function HandleAddress(props) {
    const { route: {params} } = props
    const { auth } = useAuth()
    const [loading, setLoading] = React.useState(false)
    const [buttonTitle, setButtonTitle] = React.useState('Create')
    const [isLoading, setIsLoading] = React.useState(true)
    const navigation = useNavigation()
    const formik = useFormik({
        initialValues: INITIAL_VALUES,
        validationSchema: Yup.object(VALIDATION_SCHEMA),
        onSubmit: async (formData) => {
            setLoading(true)
            try {
                let res
                (buttonTitle === 'Create')
                    ? res = await addAdressApi(auth, formData)
                    : res = await updateAddressApi(auth, formData)
                console.log(res)
                navigation.goBack()
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
    })

    React.useEffect(() => {
        (async () => {
            if(params?.idAddress) {
                const res = await getAddressByIdApi(auth, params.idAddress)
                await formik.setFieldValue('_id', res._id)
                await formik.setFieldValue('title', res.title)
                await formik.setFieldValue('name', res.name)
                await formik.setFieldValue('address', res.address)
                await formik.setFieldValue('postal_code', res.postal_code)
                await formik.setFieldValue('city', res.city)
                await formik.setFieldValue('state', res.state)
                await formik.setFieldValue('country', res.country)
                await formik.setFieldValue('phone', res.phone)
                setButtonTitle('Update')
            }
            setIsLoading(false)
        })()
    },[params])

    return (
        <KeyboardAwareScrollView extraScrollHeight={25}>
            <View style={layoutStyles.container}>
                {
                    isLoading 
                        ? <Loading size={100} color={COLORS.secondary} text='Loading...' topRange={135} />
                        : (
                            <View>
                                <TextInput
                                    label='Title'
                                    style={formStyles.input}
                                    onChangeText={(text) => formik.setFieldValue('title', text)}
                                    value={formik.values.title}
                                    error={formik.errors.title}
                                />
                                <TextInput
                                    label='Description'
                                    style={formStyles.input}
                                    onChangeText={(text) => formik.setFieldValue('name', text)}
                                    value={formik.values.name}
                                    error={formik.errors.name}
                                />
                                <TextInput
                                    label='Address'
                                    style={formStyles.input}
                                    onChangeText={(text) => formik.setFieldValue('address', text)}
                                    value={formik.values.address}
                                    error={formik.errors.address}
                                />
                                <TextInput
                                    label='Postal Code'
                                    style={formStyles.input}
                                    onChangeText={(text) => formik.setFieldValue('postal_code', text)}
                                    value={formik.values.postal_code}
                                    error={formik.errors.postal_code}
                                />
                                <TextInput
                                    label='City'
                                    style={formStyles.input}
                                    onChangeText={(text) => formik.setFieldValue('city', text)}
                                    value={formik.values.city}
                                    error={formik.errors.city}
                                />
                                <TextInput
                                    label='State'
                                    style={formStyles.input}
                                    onChangeText={(text) => formik.setFieldValue('state', text)}
                                    value={formik.values.state}
                                    error={formik.errors.state}
                                />
                                <TextInput
                                    label='Country'
                                    style={formStyles.input}
                                    onChangeText={(text) => formik.setFieldValue('country', text)}
                                    value={formik.values.country}
                                    error={formik.errors.country}
                                />
                                <TextInput
                                    label='Phone'
                                    style={formStyles.input}
                                    onChangeText={(text) => formik.setFieldValue('phone', text)}
                                    value={formik.values.phone}
                                    error={formik.errors.phone}
                                />
                                <Button 
                                    mode='contained' 
                                    style={formStyles.btnSuccess} 
                                    onPress={formik.handleSubmit}
                                    loading={loading}
                                >
                                    {buttonTitle}
                                </Button>
                            </View>
                        )
                }
            </View>
        </KeyboardAwareScrollView>
    )
} 
