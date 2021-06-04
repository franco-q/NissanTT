import React, { FC } from 'react'
import { Button, Div } from 'react-native-magnus'

interface Props {
	navigation: any
}
const Intro: FC<Props> = ({ navigation }) => {
	return (
		<Div
			p={'md'}
			flex={1}
			bgImg={require('../Assets/bg-intro.jpg')}
			justifyContent={'center'}>
			<Div
				alignItems="center"
				m={'auto'}
				p={'md'}
				alignSelf={'center'}
				justifyContent={'center'}>
				<Button
					m="auto"
					rounded={0}
					px="2xl"
					py="lg"
					bg="redNissan"
					color="white"
					onPress={() => navigation.navigate('Signin')}>
					Entrar
				</Button>
			</Div>
		</Div>
	)
}

export default Intro
