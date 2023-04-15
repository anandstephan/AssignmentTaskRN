import { HStack, View,Image, Heading, VStack,Stack } from "native-base"
import { AntDesign } from '@expo/vector-icons';
const ProfileCard = () =>{
return <HStack marginTop={10} bgColor={'orange.100'} padding={2} alignItems={'center'} justifyContent={'space-between'}>
<Image source={{
      uri: "https://wallpaperaccess.com/full/317501.jpg"
    }} alt="Alternate Text" size="xl"
    borderRadius={90}
    />
    <VStack>
    <Heading color={'orange.400'}>Deeksha</Heading>
    <Heading size={'xs'} color={'gray.600'}>React Native Developer</Heading>
    </VStack>
    <Stack marginTop={-20}>
    <AntDesign name="eye" size={24} color={"orange"}/>
    </Stack>
</HStack>
}
export default ProfileCard