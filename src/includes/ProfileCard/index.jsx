import { Button, CardBody, CardDescription, CardFooter, CardRoot, CardTitle, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { minifyText } from '../../Utils/Helper';
import PropTypes from 'prop-types';

export const ProfileCard = (props) => {
    const { imageSrc, cardTitle, cardDes, cardPrice } = props;

    ProfileCard.PropTypes = {
        imageSrc: PropTypes.string,
        cardTitle: PropTypes.string,
        cardDes: PropTypes.string,
        cardPrice: PropTypes.string,
    }

    return (
        <>
            <CardRoot maxW="sm" overflow="hidden">
                <Image
                    src={imageSrc ?? ''}
                    alt={`image of ${cardTitle ?? ''}`}
                />
                <CardBody gap="2">
                    <CardTitle>{cardTitle ?? ''}</CardTitle>
                    <CardDescription>
                        {minifyText(cardDes ?? '')}
                    </CardDescription>
                    <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
                        {cardPrice ?? ''}
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
