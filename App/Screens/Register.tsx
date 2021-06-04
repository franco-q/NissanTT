import React, { useEffect } from 'react'
import type { FC } from 'react'
import { Input, Text, Div, Button } from 'react-native-magnus'
import { TouchableOpacity } from 'react-native'
import { useHeaderHeight } from '@react-navigation/stack'

const Regular = 'Nissan Brand Regular'
const Bold = 'Nissan Brand Bold'
const Italic = 'Nissan Brand Italic'
const Light = 'Nissan Brand Light'

interface Props {
	navigation: any
}

const Register: FC<Props> = ({ navigation }) => {
	const headerHeight = useHeaderHeight()
	useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Text p={'md'} mr={'md'} fontFamily={Light} fontSize={'xl'}>
						Volver atrás
					</Text>
				</TouchableOpacity>
			)
		})
	}, [])
	return (
		<Div
			p={'md'}
			pt={headerHeight}
			bgImg={require('../Assets/bg-pattern.jpg')}
			flex={1}>
			<Div mb={'2xl'}>
				<Text fontSize={'7xl'} fontFamily={Regular}>
					Creá tu cuenta
				</Text>
				<Text fontSize={'lg'} fontFamily={Light}>
					Completa los siguientes campos:
				</Text>
			</Div>
			<Div mb={'lg'}>
				<Text fontSize={'lg'} fontFamily={Regular}>
					Dirección de correo electrónico:
				</Text>
				<Input
					h={32}
					pt={0}
					pb={0}
					rounded={0}
					bg={'transparent'}
					borderBottomColor={'#3D3D3D'}
					borderBottomWidth={0.7}
					borderTopWidth={0}
					borderRightWidth={0}
					borderLeftWidth={0}
					fontFamily={Regular}
				/>
			</Div>

			<Div mb={'lg'}>
				<Text fontSize={'lg'} fontFamily={Regular}>
					Contraseña:
				</Text>
				<Input
					h={32}
					pt={0}
					pb={0}
					rounded={0}
					bg={'transparent'}
					borderBottomColor={'#3D3D3D'}
					borderBottomWidth={0.7}
					borderTopWidth={0}
					borderRightWidth={0}
					borderLeftWidth={0}
					fontFamily={Regular}
				/>
			</Div>

			<Div mb={'lg'}>
				<Text fontSize={'lg'} fontFamily={Regular}>
					Repite tu contraseña:
				</Text>
				<Input
					h={32}
					pt={0}
					pb={0}
					rounded={0}
					bg={'transparent'}
					borderBottomColor={'#3D3D3D'}
					borderBottomWidth={0.7}
					borderTopWidth={0}
					borderRightWidth={0}
					borderLeftWidth={0}
					fontFamily={Regular}
				/>
			</Div>

			<Div row mt={'md'}>
				<Button
					rounded={0}
					ml={'auto'}
					px="2xl"
					py="sm"
					bg="redNissan"
					color="white"
					fontFamily={Light}>
					Registrarse
				</Button>
			</Div>
		</Div>
	)
}

export default Register
