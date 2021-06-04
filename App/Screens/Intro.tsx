import React, { FC, useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import { Button, Div, Text } from 'react-native-magnus'

const Regular = 'Nissan Brand Regular'
const Bold = 'Nissan Brand Bold'
const Italic = 'Nissan Brand Italic'
const Light = 'Nissan Brand Light'

import Logo from '../Assets/SVG/Logo Nissan Negativo.svg'
import NissanTips from '../Assets/SVG/NISSANTIPS.svg'

interface Props {
	navigation: any
}

const Intro: FC<Props> = ({ navigation }) => {
	useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<TouchableOpacity onPress={() => navigation.navigate('Signin')}>
					<Text
						p={'md'}
						mr={'md'}
						fontFamily={Light}
						fontSize={'xl'}
						color={'white'}>
						Iniciar Sesión
					</Text>
				</TouchableOpacity>
			)
		})
	}, [])
	return (
		<Div
			p={'md'}
			flex={1}
			bgImg={require('../Assets/bg-intro.jpg')}
			justifyContent={'center'}>
			<Div p={'2xl'} flex={1} alignItems="center">
				<Div h={210} w={210}>
					<Logo />
				</Div>
				<Div w={170} h={50} p={'md'}>
					<NissanTips />
				</Div>
			</Div>
			<Div
				m={'auto'}
				p={'md'}
				flex={1}
				alignItems="center"
				justifyContent={'center'}>
				<Div>
					<Button
						m="auto"
						rounded={0}
						px="2xl"
						py="md"
						bg={'redNissan'}
						color="white"
						fontFamily={Light}
						onPress={() => navigation.navigate('Register')}>
						Crear Cuenta
					</Button>
				</Div>
			</Div>
		</Div>
	)
}

export default Intro
