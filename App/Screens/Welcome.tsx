import React from 'react'
import type { FC } from 'react'
import { Div, Text } from 'react-native-magnus'
import { useHeaderHeight } from '@react-navigation/stack'

interface Props {
	navigation: any
}

const Welcome: FC<Props> = () => {
	const headerHeight = useHeaderHeight()
	return (
		<Div
			p={'md'}
			pt={headerHeight}
			bgImg={require('../Assets/bg-pattern.jpg')}
			flex={1}>
			<Div mb={'xl'}>
				<Text fontSize={'6xl'}>Creá tu cuenta</Text>
				<Text fontSize={'xl'} fontFamily={}>
					Completa los siguientes campos:
				</Text>
			</Div>
			<Div mb={'lg'}>
				<Text fontSize={'xl'}>Dirección de correo electrónico:</Text>
				<Input
					h={32}
					pt={0}
					pb={0}
					rounded={0}
					bg={'transparent'}
					borderBottomColor={'#3D3D3D'}
					borderBottomWidth={0.5}
					borderTopWidth={0}
					borderRightWidth={0}
					borderLeftWidth={0}
				/>
			</Div>

			<Div row>
				<Button
					rounded={0}
					ml={'auto'}
					px="xl"
					py="sm"
					bg="redNissan"
					color="white">
					Registrarse
				</Button>
			</Div>
		</Div>
	)
}

export default Welcome
