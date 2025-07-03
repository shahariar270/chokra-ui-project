import { Button, CardBody, CardDescription, CardFooter, CardRoot, CardTitle, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { minifyText } from '../../Utils/Helper';

export const ProfileCard = (props) => {
    const { imageSrc, cardTitle, cardDes, cardPrice } = props;
    return (
        <>
            <CardRoot maxW="sm" overflow="hidden">
                <Image
                    src={imageSrc}
                    alt="Green double couch with wooden legs"
                />
                <CardBody gap="2">
                    <CardTitle>{cardTitle}</CardTitle>
                    <CardDescription>
                        {minifyText(cardDes)}
                    </CardDescription>
                    <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                        {cardPrice}
                    </Text>
                </CardBody >
                <CardFooter gap="2">
                    <Button variant="solid">Buy now</Button>
                    <Button variant="ghost">Add to cart</Button>
                </CardFooter>
            </CardRoot>
        </>
    )
}
