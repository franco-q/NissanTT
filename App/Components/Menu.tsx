import React, { useRef } from 'react'
import { TouchableOpacity } from 'react-native'
import { Div, Drawer, DrawerRef } from 'react-native-magnus'
import Icon from '../Assets/SVG/Menu.svg'

const MenuBtn = () => {
	const drawerRef = useRef<DrawerRef>(null)
	return (
		<>
			<Div mr={'xl'} bg={'blue'}>
				<TouchableOpacity
					onPress={() => {
						console.log(drawerRef.current)

						if (drawerRef.current) {
							drawerRef.current.open()
						}
					}}>
					<Div h={30} w={30}>
						<Icon />
					</Div>
				</TouchableOpacity>
			</Div>
			<Drawer ref={drawerRef} bg={'#333333'} p={''} direction={'right'} mt={50}>
				<TouchableOpacity>
					<Div h={30} w={30} bg={'blue'}>
						<Icon />
					</Div>
				</TouchableOpacity>
			</Drawer>
		</>
	)
}

export default MenuBtn
