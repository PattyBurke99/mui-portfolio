import React, { cloneElement } from 'react';
import {
    Box,
    Card,
    CardHeader,
    CardContent,
    Divider,
    Slide,
    Typography
} from '@mui/material'
import { contentCardWidthLg, contentCardWidthXl } from '../constants';

export interface IContentCardProps {
    icon?: React.ReactElement;
    title: string;
    animationTime: number;
    zLayer: number;
    sections: React.ReactElement[];
}

export function ContentCard({ icon, title, animationTime, zLayer, sections }: IContentCardProps) {
    return (
        <Slide in direction="right" timeout={animationTime}>
            <Card elevation={3} sx={{
                width: { lg: contentCardWidthLg, xl: contentCardWidthXl},
                zIndex: zLayer,
            }}>
                <CardHeader title={
                    <Box sx={{position: 'relative'}}>
                        {icon && cloneElement(icon, { sx: {position: 'relative', top: 4}})}
                        <Typography display="inline" variant="h5"> {title}</Typography>
                    </Box>
                }/>
                <Divider />
                <CardContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    {sections.map((section, index) => (
                        <Box key={`section-${index}`}>
                            {section}
                        </Box>
                    ))}
                </CardContent>
            </Card>
        </Slide>
    )
}